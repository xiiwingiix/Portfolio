import sys
# import re
import io
import xlrd
import math #round
import requests
import json
from bs4 import BeautifulSoup
sys.stdout = io.TextIOWrapper(sys.stdout.detach(), encoding = 'utf-8')
sys.stderr = io.TextIOWrapper(sys.stderr.detach(), encoding = 'utf-8')


def get_bs_obj(company_code):
	url = "https://finance.naver.com/item/main.nhn?code=" + company_code
	result = requests.get(url)
	bs_obj = BeautifulSoup(result.content, "html.parser")
	return bs_obj

def get_text(str):
	removed_str = str.text.strip().replace('\n','').replace('\t','').replace(',','')
	return removed_str

def chk_number(str):
	minus = '-'

	if minus in str or str == '':
		return False
	else :
		return True

# bs_obj를 받아서 price를 return하게
def get_data(company_code, company_name):
	bs_obj = get_bs_obj(company_code)

	# 현재가
	no_today = bs_obj.find("p", {"class":"no_today"})
	blind_now = no_today.find("span",{"class":"blind"})

	# 기업 실적 분석
	cop_analysis = bs_obj.find("div",{"class","cop_analysis"})
	if not cop_analysis : return

	# 최근 연간 실적
	thead = cop_analysis.find("thead")
	if not thead : return

	if len(thead.findAll("tr")) > 2 :
		A_date = thead.findAll("tr")[1].findAll("th")[2]
		Q_date = thead.findAll("tr")[1].findAll("th")[8]
	else :
		return

	tbody 	= cop_analysis.find("tbody")
	A_ROE 	= tbody.findAll("tr")[5].findAll("td")[2]

	A_debt	= tbody.findAll("tr")[6].findAll("td")[2]
	A_RR 	= tbody.findAll("tr")[8].findAll("td")[2]
	A_PER 	= tbody.findAll("tr")[10].findAll("td")[2]
	A_PBR 	= tbody.findAll("tr")[12].findAll("td")[2]
	A_DYR	= tbody.findAll("tr")[14].findAll("td")[2]

	Q_ROE 	= tbody.findAll("tr")[5].findAll("td")[8]
	Q_debt 	= tbody.findAll("tr")[6].findAll("td")[8]
	Q_RR 	= tbody.findAll("tr")[8].findAll("td")[8]
	Q_PER 	= tbody.findAll("tr")[10].findAll("td")[8]
	Q_PBR 	= tbody.findAll("tr")[12].findAll("td")[8]
	Q_DYR	= tbody.findAll("tr")[14].findAll("td")[8]

	print(company_code+','+get_text(A_ROE) +','+ get_text(Q_ROE))

	print(chk_number(get_text(A_ROE)))
	print(chk_number(get_text(Q_ROE)))
	print(chk_number(get_text(A_PER)))
	print(chk_number(get_text(Q_PER)))

	if chk_number(get_text(A_ROE)) and chk_number(get_text(Q_ROE)) and chk_number(get_text(A_PER)) and chk_number(get_text(Q_PER)):

		f_A_ROE = float(get_text(A_ROE))
		f_Q_ROE = float(get_text(Q_ROE))
		f_A_PER = float(get_text(A_PER))
		f_Q_PER = float(get_text(Q_PER))

		if f_A_ROE / f_A_PER > 3 and f_Q_ROE / f_Q_PER > 3:
			return {
				"company_name" : company_name,
				"company_code":company_code ,
				"cur_price":blind_now.text,
				"annual_date":get_text(A_date),
				"annual_ROE":get_text(A_ROE),
				"annual_debt":get_text(A_debt),
				"annual_Reserve_ration":get_text(A_RR),
				"annual_PER":get_text(A_PER),
				"annual_PBR":get_text(A_PBR),
				"annual_dividend_yield_ratio":get_text(A_DYR), #배당률
				"quarterly_date":get_text(Q_date),
				"quarterly_ROE":get_text(Q_ROE),
				"quarterly_debt":get_text(Q_debt),
				"quarterly_Reserve_ration":get_text(Q_RR),
				"quarterly_PER":get_text(Q_PER),
				"quarterly_PBR":get_text(Q_PBR),
				"quarterly_dividend_yield_ratio":get_text(Q_DYR)
			}

def crawl(keyword):
	return [keyword]

workbook 	= xlrd.open_workbook('D:\git_hub\\Portfolio\\py\\trading_data.xls')
worksheet 	= workbook.sheet_by_name('Sheet1')
xls_list 	= worksheet._cell_values

company = []

for row in xls_list[1:]:
	code = crawl(row[1])
	name = crawl(row[2])
	company_finance = get_data(code[0], name[0])
	if company_finance is not None:
		company.append(company_finance)
		print(company)

# company_price = get_price('112190')
# company.append(company_price)
# print(company)

file = open('./trading.json','w+')
file.write(json.dumps(company))
