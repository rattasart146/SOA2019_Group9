*** Settings ***
Library         Selenium2Library
Test Setup      เปิด Browser
Suite Setup     Log to console  Hello World
Suite Teardown  Log to console  Goodbye!!!

*** Variables ***
${URL}  http://35.240.225.238:8080/
${BROWSER}  gc

*** Keywords ***
เปิด Browser
  Open Browser  ${URL}  ${BROWSER}
  Maximize Browser Window

Accept Dialog
  Handle Alert  accept

สมัครสมาชิก
  Click Element  //*[@id="regis-link"]/p/a/span
  Location Should Be  http://35.240.225.238:8080/#/register
  Input Text  //*[@id="Username"]  SteveSliped
  Input Text  //*[@id="password"]	123456
  Input Text  //*[@id="wrap-register"]/div/div/div[1]/form/div[3]/input  Steven
  Input Text  //*[@id="wrap-register"]/div/div/div[1]/form/div[4]/input  Gerrard
  Click Button  //*[@id="regis-link"]
  wait until page contains element  //*[@id="detail-form"]/div[2]/button
  Click Button  //*[@id="detail-form"]/div[2]/button
  Location Should Be  http://35.240.225.238:8080/#/

Login
  Input Text  //*[@id="wrap-login"]/div[2]/div[2]/div/div/div[2]/div/form/div[1]/input  test1
  Input Text  //*[@id="wrap-login"]/div[2]/div[2]/div/div/div[2]/div/form/div[2]/input  1234
  Click Element	 //*[@id="wrap-login"]/div[2]/div[2]/div/div/div[2]/div/form/button
  wait until page contains element  //*[@id="app"]/div/nav/h2
  Element Text Should Be  //*[@id="app"]/div/nav/h2  สวัสดีคุณ test1 
  Reload Page

คลิกดูรายละเอียดการแข่งขัน
  wait until page contains Element  //*[@id="app"]/div/div/div[2]/div[2]/div[4]/div/div[2]/div[2]/a
  Click Element  //*[@id="app"]/div/div/div[2]/div[2]/div[4]/div/div[2]/div[2]/a
  Location Should Be  http://35.240.225.238:8080/#/match-detail?match_id=15

คลิกสมัครการแข่งขัน
  wait until page contains element  //*[@id="app"]/div/div/div[1]/div/div/div[2]/div/span/button
  Click Button  //*[@id="app"]/div/div/div[1]/div/div/div[2]/div/span/button
  Location Should Be  http://35.240.225.238:8080/#/MatchRegister?match_id=15

คลิกสร้างการแข่งขัน
  wait until page contains element  //*[@id="app"]/div/nav/button[3]
  Click Button  //*[@id="app"]/div/nav/button[3]

คลิกการแข่งขันที่สร้างไว้
  wait until page contains element  //*[@id="app"]/div/nav/button[2]
  Click Button  //*[@id="app"]/div/nav/button[2]

*** Test Cases ***
ทดสอบ สมัครสมาชิก
  สมัครสมาชิก
  
ทดสอบ Login
  Login

เข้าสู่หน้ารายละเอียดการแข่งขัน+สมัครการแข่งขัน 
  Login
  คลิกดูรายละเอียดการแข่งขัน
  คลิกสมัครการแข่งขัน
  Input Text  //*[@id="team-name"]  หงส์น้อยคอยแชมป์
  Input Text  //*[@id="team-contact"]  0943729718
  Click Element  //*[@id="regis-link"]
  Accept Dialog
  Location Should Be  http://35.240.225.238:8080/#/match-detail?match_id=15
  wait until page contains element  //*[@id="app"]/div/div/div[2]/div/div[2]/table/tbody[3]/tr/td[1]
  Element Text Should Be  //*[@id="app"]/div/div/div[2]/div/div[2]/table/tbody[3]/tr/td[1]  หงส์น้อยคอยแชมป์
  # ชุดนี้คอยแก้ที่ Element ของ Math ที่จะเข้าไปสมัคร , ชื่อ เบอรืติดต่อทีม และ tbody[เลขแถวตาราง]
  # //*[@id="app"]/div/div/div[2]/div/div[2]/table/>>>tbody[1]<<</tr/td[1]

สร้างการแข่งขัน
  Login
  คลิกสร้างการแข่งขัน
  Input Text  //*[@id="match-name"]  Pakchong FA Cup 2019
  Input Text  //*[@id="match-address"]  Pakchong
  Input Text  //*[@id="match-detail"]  ชิงเงินรางวัลกว่า 30,000 บาท
  Input Text  //*[@id="match-date"]  16
  Click Button  //*[@id="create-link"]
  Confirm Action
  Location Should Be  http://35.240.225.238:8080/#/showtime
  wait until page contains element  //*[@id="app"]/div/div/div[2]/div[2]/div[18]/div/div[1]/div[1]/h2/strong
  Element Text Should Be  //*[@id="app"]/div/div/div[2]/div[2]/div[18]/div/div[1]/div[1]/h2/strong  Pakchong FA Cup 2019
  						  # //*[@id="app"]/div/div/div[2]/div[2]/>>>div[15]<<</div/div[1]/div[1]/h2/strong ชื่อ Match
  Element Text Should Be  //*[@id="app"]/div/div/div[2]/div[2]/div[18]/div/div[1]/div[2]/h5/strong  test1
  						  # //*[@id="app"]/div/div/div[2]/div[2]/>>>div[15]<<</div/div[1]/div[2]/h5/strong ชื่อเจ้าของ 
  # ชุดนี้คอยแก้ที่ Input Text ของ Math ที่จะสร้าง และ div[ลำดับที่ Match ใหม่ถูกสร้างขึ้นมา] + ชื่อ Match กับชื่อเจ้าของ ให้ตรงกับ Input

จัดการการแข่งขัน
  Login
  คลิกการแข่งขันที่สร้างไว้
  wait until page contains element  //*[@id="app"]/div/div/div[2]/div/div[2]/div/div[2]/div[2]/a
  Click Element  //*[@id="app"]/div/div/div[2]/div/div[2]/div/div[2]/div[2]/a
  Location Should Be  http://35.240.225.238:8080/#/match-detail-own?match_id=16&status=owner
  wait until page contains element  //*[@id="app"]/div/div/div[1]/div/div/div[2]/span/button
  Click Button  //*[@id="app"]/div/div/div[1]/div/div/div[2]/span/button
  Location Should Be  http://35.240.225.238:8080/#/match-management?match_id=16
  Input Text  //*[@id="app"]/div/div/div[3]/div/div[3]/form/div/div[1]/input  3
  Input Text  //*[@id="app"]/div/div/div[3]/div/div[3]/form/div/div[2]/input  2
  Input Text  //*[@id="app"]/div/div/div[3]/div/div[3]/form/div/div[3]/input  20
  Click Button  //*[@id="app"]/div/div/div[3]/div/div[3]/form/div/button
  Accept Dialog
  Location Should Be  http://35.240.225.238:8080/#/match-detail-own?match_id=16
  wait until page contains element    //*[@id="app"]/div/div/div[3]/div/div[2]/table/tbody/tr/td[3]
  Element Text Should Be  //*[@id="app"]/div/div/div[3]/div/div[2]/table/tbody/tr/td[3]  3
  Element Text Should Be  //*[@id="app"]/div/div/div[3]/div/div[2]/table/tbody/tr/td[5]  2