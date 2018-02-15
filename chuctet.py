import requests,json,time,random
from fbchat import Client, ThreadType,log
from fbchat.models import *
import datetime,os
listliked=[]
##=================================
msg=['Chúc năm Mậu Tuất ai cũng giàu to\nSức khỏe chẳng lo\nBuồn bực xếp xó\nKhó khăn chuyện nhỏ\nViệc chạy ro ro\nKhông còn nhăn nhó\nMuốn gì được đó!\n[Happy New Year]','Mậu Tuất vừa sang\nHạnh phúc mênh mang\nÝ chí vững vàng\nNiềm vui rộn ràng\nTiền bạc lai láng\nSức khỏe cường tráng\nCả nhà cười vang\n[Chúc mừng năm mới]','Năm Tuất sắp đến\nChúc bạn đáng mến\nSự nghiệp tiến lên\nGặp nhiều điều hên\nRước nhiều may mắn.\n[Chúc mừng năm mới]','Năm mới lại tới\nChúc bạn phơi phới\nHọc hành tấn tới\nMiệng luôn cười tươi\nDu xuân khắp nơi\nNhận nhiều quà Tết\nĐinh Dậu vừa hết\nMậu Tuất vừa sang\nThịnh vượng an khang\nVạn sự như ý\n[Happy New Year]',' Chúc mọi người năm mới Mậu Tuất có một bầu trời sức khỏe, một biển cả tình thương, một đại dương tình cảm, một điệp khúc tình yêu, một người yêu chung thủy, một tình bạn mênh mông, một sự nghiệp rạng ngời, một gia đình thịnh vượng.\n[Chúc mừng năm mới]','Chúc bạn và gia đình một năm Mậu Tuất 12 tháng phú quý, 52 tuần như ý, 365 ngày phát tài, 8760 giờ sung túc, 525600 phút thành công và 3153600 giây khỏe mạnh.\n[Chúc mừng năm mới]','Năm mới Tết đến\nRước hên vào nhà\nQuà cáp bao la\nMọi người no đủ\nVàng bạc đầy tủ\nGia chủ phát tài\nGià trẻ gái trai\nSum vầy hạnh phúc\nCầu tài chúc phúc\nLộc đến quanh năm\nAn khang thịnh vượng.\n[Chúc mừng năm mới]','Chúc cả gia đình bạn vạn sự như ý, Tỉ sự như mơ, Triệu triệu bất ngờ, Không chờ cũng đến!\n[Chúc mừng năm mới]']
##==================================
id_post= input('ID_POST ')
email=input('USERNAME ')
password=input('password ')
token= '<TOKEN>'
print('Done')
client = Client(email, password)
payload={'method':'get','access_token':token}
posts=requests.get('https://graph.facebook.com/'+id_post+'/reactions',params=payload).json()

def chuctet():
	try:
		while True:
			now = datetime.datetime.now()
			if (now.hour==0):
				for i in posts['data']:
					id_rct=i['id']
					if (id_rct) not in listliked:
						try:
							client.sendMessage(random.choice(msg), thread_id=id_rct, thread_type=ThreadType.USER)
							print('send to: '+id_rct)
							listliked.append(id_rct)
							time.sleep(5)
						except:
							continue
			else:
				print('DEM NGUOC {}:{}:{}'.format(24-now.hour,60-now.minute,60-now.second))
				os.system('cls')

	except:
		print('error')
		client.logout()
chuctet()
