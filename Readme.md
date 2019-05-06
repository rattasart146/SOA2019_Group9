***http://35.240.225.238:8080/#/ ดีพลอย

# **ชื่อโครงการ** : Matching! ระบบจัดการการแข่งขันกีฬาฟุตบอล
***
**ความต้องการทางธุรกิจ**
โดยปกติในการจัดการแข่งขันกีฬาประเภทต่างๆ มักจะมีปัญหาในหลายๆอย่าง เช่น การอัพเดตข่าวสาร การจัดสายการแข่งขัน การสมัครเข้าร่วมการแข่งขัน หรือการติดตามผลของการแข่งกัน ผ่านทางช่องทางต่างๆที่ไม่ค่อยสะดวกสบายนักในระดับท้องถิ่น โดยกีฬาที่เราเลือกพัฒนาคือกีฬาฟุตบอล ซึ่งเครื่องมือที่จะมาช่วยปัญหาที่กล่าวข้างต้นคือระบบที่เปิดให้ผู้ที่สนใจกีฬาฟุตบอลหรือผู้ที่มีความรู้เกี่ยวกับกีฬาฟุตบอลสามารถจัดการแข่งขันฟุตบอลด้วยตนเองได้โดยอิงกติกาพื้นฐาน ผ่านเครื่องมือต่างๆไม่ว่าจะเป็นการสมัครหรือการจัดสายแข่งขันและอื่น ๆ รวมไปถึงกับประชาสัมพันธ์ และรายงานผลการแข่งขันของตนเองผ่านเว็บไซต์
***
**Core service**
การรวบรวมข้อมูลผู้สมัครมาจัดสายแข่งขันและรายงานผล
***
**ความต้องการด้านฟังก์ชันการทำงาน**
ระบบจะแบ่งผู้ใช้งานออกเป็นสองประเภท คือ ผู้ใช้งานที่เป็นสมาชิก และ ผู้ใช้งานที่ไม่เป็นสมาชิก


* สมัครสมาชิก กรณีที่ผู้ใช้งานต้องการจัดการแข่งขันของตนเอง โดยระบบจะทำการบันทึกข้อมูลไว้
* เข้าสู่ระบบ

**_กรณีผู้ใช้ที่เป็นสมาชิก_**
 ผู้ใช้สามารถสร้าง แก้ไข เพิ่มหรือลบทัวร์นาเมนต์ที่ส้รางขึ้นได้
* สร้างทัวร์นาเมนต์ 
* จัดการทัวร์นาเมนต์ 

**_กรณีที่ผู้ใช้ไม่ได้เป็นสมาชิก_**
 ผู้ใช้สามารถสมัครแข่งขัน จัดการรายละเอียดการสมัคร หรือดูผลและรายละเอียดการแข่งเท่านั้น
* สมัครทีมแข่งขัน
* จัดการทีมแข่งขัน


### How to run Service_**
do first
```
git clone https://github.com/rattasart146/SOA2019_Group9.git
cd project folder
```
and then


**รัน eureka**
``` 
cd eureka-server
mvnw clean package
java -jar target/eureka-server.jar
```

**matchservice**
``` 
cd matchservice
node app.js
```
**userservice**
```
cd userservice
node app.js
```
**processservice**
```
cd processservice
node app.js
```

**รัน api gateway**
```
cd APIGateway
node app.js
```

### docker image https://hub.docker.com/u/imearth_ 


***
**APIGATEWAY**  
*localhost:3001/api/
,  ขึ้น cloud =>  http://35.240.225.238:3001/api
***
***
**eureka**
http://35.240.225.238:8761
***


 ### API Endpoint_**

**_Match Service : Service ที่ใช้ค้นหา match ที่จัดขึ้นอยู่ในระบบและแสดงข้อมูลจำเพาะ_**
```
GET /matchgateway/match แสดงข้อมูล match ทั้งหมดในระบบ
GET /matchgateway/match/matchid/:matchid:  id  เช่นเลข 1,2,3,4,5 แสดงข้อมูลเฉพาะ match นั้นๆ
GET /matchgateway/match/matchname/:matchname: ค้นหาจากชื่อการแข่ง
GET /matchgateway/match/status/:status: แสดงตามสถานะการแข่ง
GET /matchgateway/match/owner/:matchowner: แสดงการแข่งขันที่สร้างไว้
GET /matchgateway/match/join/:username: แสดงการแข่งขันที่เข้าร่วม

POST /matchgateway/match/matchid/:matchid/setstatus/:status อัพเดตสถานะ end , registering , matching
POST /matchgateway/match/newmatch สร้างการแข่งขันใหม่ ต้องใส่ matchname, matchowner, match_desc, match_location, match_status, match_size
```

**_Process Service : Service ที่ใช้จัดการเกี่ยวกับ Process ต่างๆระหว่างการแข่งขัน_**
```
GET /processgateway/proess/allteam แสดงรายชื่อทีมที่เข้าร่วมการแข่งขันนั้น
POST /processgateway/proess/:matchid/teamjoin เพิ่มทีมเข้าไปในการแข่ง ต้องใส่ team_name, team_contact, team_owner

GET /processgateway/proess/:matchid/allschedule เช็คตารางแข่ง
POST /processgateway/proess/:matchid/newschedule สร้างนัดหมายการแข่ง ต้องใส่ team_1_name, team_2_name, date, hr, min
```

**_User Service : Service ที่ใช้ค้นหา เพิ่ม และแสดงข้อมูลผู้ใช้_**
```
GET /user แสดงข้อมูลผู้ใช้ทั้งหมด
GET /user/id/:userid: แสดงข้อมูลผู้ใช้ตาม userid
POST /user/newuser เพิ่ม user ใหม่ ต้องใส่ username, password, firstname, lastname
```
