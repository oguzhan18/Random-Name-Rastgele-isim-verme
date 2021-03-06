const firstNames = [
"Abay- Türk ve Altay mitolojisinde Yeryüzü Tanrıçası", 
"Ada Kutay - Türk mitolojisinde Gök aleminin efendisi. Ülgen", "Katherine", 
"Adal - Ün kazanmış, ünlü", 
"Adayış - Hedefleri için  çaba sarf etme", 
"Akın - İlerleme, sefer",
"Akınalp - Kendini geliştiren bilge ve güçlü kişi", 
"Aktuğ - Türk mitolojisinde iyilik tanrısı. Aktu", 
"Alkım - Gökkuşağı", 
"Alp - Yiğit kişi", 
"Alparslan - Arslan gibi güçlü erkek - Büyük Selçuklu Devleti hükümdar", 
"Alpay - Yiğit", 
"Alpdem - Dürüst ve güçlü ", 
"Alper - Yiğit", 
"Alperen - Dürüst ve inançlı kişi.",
"Alpkunt - Karakterli ", 
"Alpkutay - İpek gibi değerli", 
"Alptekin - İyi huylu yiğit kişi - Gazneliler Devleti’nin kurucusu Türk hükümdar",
"Altan - Altın", 
"Altay - Türk, mitolojisinde Dağ Tanrıs",
"Altınay - Değerli kişi",
"Anıl - Amaç - Hafıza",
"Arca - Temizce",
"Arçuray - Türk mitolojisinde ormanları koruduğuna inanılan varlık",
"Arda - İşaret çubuğu - Sonra gelen",
"Arday - Temiz bir görüntüsü olan",
"Ardıç - Güzel kokulu bir ağaç.",
"Ardıl - Birinin ardından onun yerine geçen kişi - halef",
"Argun - Orta Asya’da yaygın bir hayvan.",
"Arıkan - Türk mitolojisinde iyi ruh - Aruğ Han",
"Arıl - Tüm kötülüklerden temizlenmiş.",
"Arın - Güneşin vurduğu dağ yüzü - Temiz",
"Armağan - Hediye",
"Arslan - Aslan - Cesur",
"Artun - Gururlu",
"Artunç - Tunç gibi sağlam.",
"Asutay - Hırçın at",
"Ata - Geçmişte yaşamış büyük",
"Atakan - Hükümdar olan ata",
"Atalay - Bilinir olan, ünlü",
"Atay - Türk mitolojisinde Ceza Tanrısı",
"Atılay - Bilinir olan",
"Atınç - Atılgan",
"Atilla (Attila) - İdil Irmağı gibi parlak - Avrupa Hun hükümdarı",
"Ayaz - Türk mitolojisinde Soğuk Tanrısı",
"Aybars - Güçlü ve güzel - Hun İmparatoru Atilla’nın amcası",
"Ayberk - Güçlü, dayanıklı ve güzel",
"Aybey - Memluk Devleti’nin kurucusunun adı",
"Aydın - Işıklı - Bilge ",
"Aydoğan - Doğuşuyla etrafa mutluluk saçan",
"Aydoğdu - Ay gibi güzel",
"Ayınç - Heybet, hürmet",
"Aykun - Türk mitolojisinde güç tanrısı",
"Aykut - Eski Türklerde aydan geldiği düşünülen kutsal güç",
/*-----------------------------------  "B" Harfleri-------------------------------  */
"Baran - Varan, ulaşan",
"Barış - Savaşın bitirilmesi,",
"Barlıbars - Varlıklı ve pars gibi güçlü erkek",
"Barlıbay - Varlıklı adam",
"Bartu - Zenginlik",
"Başar - Başarılı kişi",
"Batı - Güneşin batış yönü",
"Batu - Bahadır",
"Batuhan - Güçlü hükümdar - 13. yüzyılda yaşamış Altınordu hükümdarı",
"Batur - Türk mitolojisinde Cesaret Tanrısı - Cesaretli",
"Baturalp - Cesaretli",
"Baybars - Pars gibi güçlü - Memluk Devleti’nin en güçlü sultanlarından birinin adı - Moğolları yenebilen tek Müslüman hükümdar ",
"Bayhan - Zengin hükümdar",
"Bayram - Kutlu gün",
"Berkan - Geçmişine bağlı",
"Berkant - Sözünün eri",
"Berkay - Sağlam, güçlü",
"Berke - Kamçı",
"Berkehan - Güçlü hükümdar - 13. yüzyılda yaşamış Altınordu hükümdarı",
"Berkin - Sağlam, güçlü",
"Berkinay - Güçlü. (En küçük erkek evlat için tercih edilir. İnay: Küçük erkek çocuk.)",
"Berksan - Meşhur",
"Bilge - Bilgili, âlim - Bir Göktürk kağanı.",
"Bilger - Doktor - Akıllı",
"Bilkan - Bilgili",
"Birdem - Eski Türkçede “birlik” ",
"Birkan - Soylu",
"Birol - Biricik",
"Birsel - Hareketli",
"Birsen - Biricik",
"Boday - Buğday tenli",
"Bolgan - Olay, hadise",
"Bora - Fırtınalı yağmur",
"Boran - Türk mitolojilerinde Yağmur Tanrısı",
"Boyga - Başına buyruk",
"Böke - Kahraman",
"Börteçin - Türklerin Ergenekon’dan çıkmasını sağlayan demircini",
"Börü - Türklerin kutsal saydığı efsanevi kurt",
"Buğra - Türk mitolojisinde Karahan’ın oğlu. Erkek deve",
"Bulcahan - Türklerin ve Moğolların ilk atası olan kağan",
"Bulunç - Vicdan",
"Buluş - İcat",
"Bulut - Sıvı hâle gelmeden atmosferde dolaşan su zerreleri.",
"Bumin - Baykuş- Büyük bir Türk kağanı",
"Burutay - Türk mitolojisinde yağmur piri",
"Büge - Büke olarak da kullanılır. Türk mitolojisindeki efsanevi ejderhanın adıdır",
/*----------------------------- C Harfi isimleri -------------- ----------------------------------------- */
"Cengiz - Büyük Moğol hükümdarı",
"Ceyhun - Orta Asya’nın en uzun nehri",
"Coşkun - Heyecanlı kimse",
/*----------------------------- Ç Harfi isimleri -------------- ----------------------------------------- */
"Çağaşan - Çağının ilerisinde ",
"Çağatay - Yavru at - Cengiz Han’ın oğlu",
"Çağdaş - Uygar",
"Çağlar - Coşkulu kimse",
"Çağlayan - Şelale",
"Çağrı - Çakır kuşu - Davet",
"Çelik - Su ile sertleştirilen demir",
"Çetin - Zorlu",
/*----------------------------- D Harfi isimleri -------------- ----------------------------------------- */
"Demir - Demir ",
"Demirhan - Türk ve Altay mitolojisinde Demir Tanrısı",
"Demirkan - Türk ve Altay mitolojisinde Demir Tanrısı",
"Denizalp - Deniz gibi hırçın ve güçlü",
"Deren - Derleyen - düzenleyip işleri yoluna koyan",
"Devrim - Mevcut düzeni değiştirmek",
"Diren - Karşı koyma anlamında ",
"Direnç - Zorluklara karşı gösterilen çaba",
"Direniş - Bir düşünce ya da durumu vazgeçmeden savunma", 
"Diriliş - Yeniden üstün hâle gelme",
"Doğa - Yaşamın var olduğu alan",
"Doğan - Bir kuş türü",
"Doğanay - Ayın ilk ve parlak hâli",
"Doğulay - Türk mitolojisinde açgözlülük tanrısı",
"Doğuş - Ana karnından çıkış",
"Dolunay - Yeni ay",
"Doruk - En üst nokta",
"Duralp - Her zaman yiğit ve mert ",
"Durmuş - Uzun ömürlü",
"Dursun - Uzun ömürlü",
"Durualp - İyi kalpli yiğit",
/*-----------------------------E  Harfi isimleri -------------- ----------------------------------------- */
"Ediz - Değerli kimse - Yüksek",
"Egemen - Bağımlı olmayan",
"Ekin - Olgunlaşmış tahıl.",
"Ekinç - Kültür",
"Elçin - Karşılıklı yardım",
"Elgin - Farklı, diğerlerinden başka",
"Emek - Harcanan çaba",
"Emrah - Eski Türkçedeki Amrak kelimesinden gelmektedir - sevimli, sevgili",
"Emre - Aşık, tutkun",
"Engin - Açık deniz",
"Eralp - Yiğit",
"Eray - Güzel yüzlü yiğit",
"Erbatur - Yiğit",
"Erce - Yiğitçe savaşan asker",
"Erdal - Genç",
"Erdem - Ahlak ve etik değerleri ifade eden kavram",
"Erden - El değmemiş",
"Erdenay - Türk mitolojisinde Tanrıların insanlara bildirmek istedikleri kararları  ileten ruh",
"Erdi - Amacına ulaşan",
"Erdil - Vakarlı, oturup kalkmayı bilen",
"Erdinç - Güçlü",
"Erdoğan - Doğuştan yiğit olan kişi",
"Eren - Sezgisi yüksek ve yiğit kişi",
"Erenalp - Sezgisi yüksek ve yiğit kişi",
"Erenay - Deneyimli",
"Ergin - Yetişkin, olgun",
"Ergül - Türk ve Moğol mitolojisinde hayır dua ",
"Ergüz - İlkbahar",
"Erhan - Yiğit hükümdar",
"Erinç - Ulaşılan dilek",
"Eriş - Pek çok",
"Erkan - Yiğit",
"Erke - Enerji - Türk mitolojisinde baştan çıkarıcı tanrıça",
"Erki - Türk mitolojisinde zenginliği ile ünlü bir bey",
"Erkin - Özgür",
"Erkunt - Güçlü erkek",
"Erkut - Kut sahibi erkek",
"Erlinay - Erkekçe davranan",
"Erman - Yiğit",
"Erol - “Yiğit ol!” anlamında",
"Ersen - Yiğit",
"Ersin - Yiğit",
"Ersun - Yiğitliğini gösteren",
"Ertan - Sabahın ilk saatleri",
"Ertinay - Ruhunda kahramanlık olan",
"Ertuğ - Savaşçı",
"Ertuğrul - Dürüst ve güçlü kişi",
"Ertunç - Tunç gibi sağlam",
"Esen - Sağlıklı",
"Esin - İlham",
"Esinti - Hafif rüzgâr",
"Esli - Türk mitolojisinde İltekin’in oğlu - Karakter sahibi.",
"Evren - Kainat, varlığın tamamı",
"Evrim - Biyolojik ve zamansal değişim",
"Evşen - Eve mutluluk veren",
"Eylem - Mevcut duruma karşı verilen mücadele",
/*-----------------------------G  Harfi isimleri -------------- ----------------------------------------- */
"Gediz - Göl",
"Giray - Kırım hanlarının kullandığı san",
"Gökalp - Mavi gözlü yiğit - Ertuğrul Gazi’nin amcası",
"Gökay - Mavi gözlü",
"Gökbörü - Türk ve Altay mitolojisinde kutsal hayvan - Asena",
"Gökçay - Estetik görünüşlü",
"Gökçe - Gösterişli",
"Gökdeniz - Gözleri mavi ve deniz gibi - Engin",
"Gökhan - Türk mitolojisinde Gökyüzü Kağanı",
"Gökhun - Doğu Hun İmparatorluğu",
"Gökmen - Kutlu - Orta Asya’da bir dağ",
"Göksu - Yağmur",
"Gökşen - Gökkuşağı - Gökyüzü kadar mutlu",
"Göktuğ - Göktürk Kağanlığı’nın egemenlik simgesi",
"Göktürk - Tüm Türkleri tek çatı altında toplayan Türklerin atası imparatorluktan olan",
"Görkem - Güzel görünüş, estetik",
"Güçlü - Kuvveti fazla olan",
"Güler - Güleç",
"Gültekin - Kül Tigin - Eski Türkçede “kül” ismiyle parçası manasında isimler yapılmıştır",
"Günay - Güneş gibi ışıldayan - etrafa bilgi yayan",
"Günce - İnsanın özel bilgilerini günlük olarak paylaştığı betik",
"Günçin - Bir Hun tankutu",
"Gündoğdu - Eski Türklerde adaleti simgeleyen isim",
"Gündüz - Günün ışıdığı saat aralığı - Osman Bey’in babası",
"Gündüzalp - Ertuğrul Gazi’nin babası veya oğlu",
"Güner - Tan vakti",
"Güneri - Çağdaş, çağın gereklerine göre hareket eden",
"Güneş - Türk mitolojisinde bir bey - Bir yıldız adı",
"Güney - Dört yönden birisi",
"Güngör - Neşe içerisinde yaşayan",
"Güral - Kırmızı yanaklı",
"Güray - Işık saçan",
"Gürdal - Soylu",
"Gürhan - Güçlü - Türk mitolojisinde Dib Yafku’nun oğlu",
"Gürol - Yiğit ve cömert olan",
"Güven - Sadakat ve korku yaşamama durumu",
"Güvenç - Güvenilir, emin kişi",
/*-----------------------------I-İ  Harfi isimleri -------------- ----------------------------------------- */
"Ilgar - Hızlı ve etkili karar verebilen ",
"Ilgı - Türk mitolojisinde Taş-Beg’in oğlu",
"Ilgın - Hafif rüzgâr - esinti",
"Ilık - Aklıselim kararlar verebilen - Soğukla sıcak arası",
"Ilım - Ölçülü davranma erdemi",
"Işık - Aydınlık",
"İdikut - Kut sahibi ",
"İgen - Çok, çokluk içerisinde olan",
"İlber - Önder",
"İlberk - Ülkeyi güçlü hâle getiren - liderlik eden",
"İlberk - Ulusal kahraman",
"İldeniz - Bilgeliğiyle bilinen Kıpçak Türkü Türk atabeyi - Ülkesi deniz gibi engin olan",
"İlerk - Ülkenin güçlü yöneticisi",
"İlge - İlke",
"İlgi - Bağlılık",
"İlhan - Hükümdar",
"İlkay - Hilâl",
"İlke - Temel bilgi",
"İlker - İlk erkek çocuk",
"İlkut - Tanrı tarafından yönetme gücü verilen kişi",
"İlkutay - Tanrı tarafından yönetme gücü verilen kişi",
"İlöge - Başbakan, başvezir",
"İltekin - Buğra Han’ın oğlu - Türk prensi",
"İlten - Türk mitolojisinde Dağ Tanrısı",
"İlter - Ülkeyi içinde bulunduğu zor durumdan çıkarıp, derleyen",
"İltuğ - Bağımsızlık nişanı",
"İmer - Çok zengin",
"İnal -Korkut Ata ve diğer soyluların tahta çıkardığı Kayı Türkü",
"İnanç - Gönülden bağlanma ",
"İnay - Küçük erkek çocuk",
"İnel - Kapgan Kağan’ın küçük oğlu",
"İrten - Tuva Türkçesinde sabah",
"İstenç - İrade",
/*-----------------------------K Harfi isimleri -------------- ----------------------------------------- */
"Kaan - Türk hükümdarlarına verilen ad",
"Kağan - Türk hükümdarlarına verilen ad",
"Karahan - Türk mitolojisinde Dib-Yafku’nun oğlu -  Güçlü hükümdar",
"Kaya - Büyük taş kütlesi ",
"Kayaalp - Ertuğrul Gazi’nin dedesi",
"Kayahan - Kaya gibi güçlü hükümdar",
"Kayhan - Güçlü hükümdar",
"Kayıtbay - Bir Memluk sultanı",
"Kayra - Yeniden, tekrar - Bağışlayıcı",
"Kayraalp - Merhametli yiğit",
"Kıraç - Verimsiz toprak",
"Kıvanç - Övünç, iftihar",
"Kongar - Koyu kahverengi",
"Koral - Sınır muhafızı",
"Koralp - Yürekli yiğit",
"Koray - Yürekli, cesur",
"Korkut - Dolu tanesi - Eski Türk inanışındaki ak sakallı bilge",
"Köksal - Sağlam temeller üzerinde duran",
"Kubat - Büyük boyutlu",
"Kut - Türk halk inancında kutsal enerji, yaşam gücü",
"Kutal - Tanrı tarafından ülkenin yönetme gücünün verildiği kişi",
"Kutalmış - Tanrı tarafından ülkenin yönetme gücünün verildiği kişi",
"Kutay - Kutlu",
"Kürşat - 40 askeriyle birlikte Çin sarayını basan Türk Kahraman",
"Laçin - Yiğit - Bir Memluk sultanı - Kartal",
"Mergen - Türk mitolojisinde Akıl Tanrısı",
"Meriç - Kuş iskeleti",
"Mete - MÖ 209 – MÖ 174 arasındaki Asya Hun Devleti hükümdarı",
"Metehan - MÖ 209 – MÖ 174 arasındaki Asya Hun Devleti hükümdarı",
"Mutlu - Mesut",
"Müren - Türk mitolojisinde ırmağın koruyucu ruhu",
/*-----------------------------O-Ö Harfi isimleri -------------- ----------------------------------------- */
"Ogün - Mutlu olunacağına inanılan gün",
"Oğuz - Türklerin atası - En büyük Türk boylarından biri",
"Oğuzhan - Güçlü hükümdar - Türklerin atası ",
"Okan - Anlayışlı - Türk mitolojisinde barış tanrısı",
"Okay - Türk mitolojisinde Sihir Tanrısı",
"Oktay - Ok gibi güçlü kişi",
"Olcan - Türk mitolojisine göre Türklerin ve Moğolların ilk ve ortak atası olan kağan",
"Oltunç - Saygıdeğer kişi",
"Ongun - Türk mitolojisinde Bereket Tanrısı",
"Oray - Görgülü kişi",
"Orçun - Makam sahibi",
"Orhan - Kağanlık makamını elinde tutan",
"Orhun - Türklerin tarih sahnesine çıktığı vadinin adı",
"Orkan - Kağana ait toprak",
"Orkun - Türklerin tarih sahnesine çıktığı vadinin adı",
"Orkut - Eski Türklerde kutsal sayılan yer ",
"Ortun - Ortanca çocuk",
"Ozan - Halk şairi - Eski Türklerde merasimleri yöneten kişi",
"Öge - Temel unsur - Son Uygur kağanı",
"Ögen - Küçük ırmak",
"Öğüt - Nasihat",
"Öktem - Onurlu",
"Ökten - Akıllı",
"Önal - Önde olan - öncü",
"Önay - Önde olan - öncü",
"Öncel - Diğerlerinden daha önde olan",
"Önder - Ülkenin temellerini kuran kişi - Bir organizasyona liderlik eden kişi",
"Öngün - Herkesten farklı",
"Övünç - Kıvanç",
"Özalp - Doğuştan yiğit olan ",
"Özer - Yiğit",
"Özgen - Özen gösteren",
"Özgüç - Maneviyat",
"Özgür - Bağımlı olmayan",
"Özhan - Kağan soyundan gelen kişi",
"Özkan - Kağan soyundan gelen kişi",
/*-----------------------------P Harfi isimleri -------------- ----------------------------------------- */
"Pamir - Türkistan’da bulunan bir dağ grubu ",
"Pars - Yırtıcı bir hayvan",
"Parslan - Pars",
"Paşa - Kurmay düzeyinde askeri rütbeli kişi",
"Payna - Türk kültüründe Bereket Töreni",
"Pusat - Türk kültüründe silaha verilen ad",
/*-----------------------------R Harfi isimleri -------------- ----------------------------------------- */
"Rona - Attila’nın oğlu ",
/*-----------------------------S Harfi isimleri -------------- ----------------------------------------- */
"Saltuk - Özgür kişi - İlk Müslüman Türk hükümdarı (Saltuk Buğra Han)",
"Salur - Kılıç ",
"Sanberk - Sağlamlığı ile tanınan",
"Sancak - Alay bayrağı",
"Sarkan - Türk ve Macar mitolojisinde Ejderha Tanrısı",
"Sarp - Erişilmesi zor - engebeli",
"Sarsılmaz - Dirayetli",
"Savaş - Fiziksel çarpışma",
"Savcı - Osman Bey’in kardeşi - EHikmetli sözler söyleyen kişi",
"Sayda - İçi dışı bir ",
"Saygınç - Saygıdeğerlik",
"Saylam - Seçkin kişi",
"Saylan - Uçurum",
"Seçkin - Soylu - üstün",
"Seğmen - Silahlı yiğit",
"Selçuk - Güzel konuşan",
"Sencer - Kale",
"Seren - Derleyip toplayan, düzenleyen - Arslan Han’ın oğlu",
"Sergen - Yüksek düzlük",
"Serin - Sakinlik - Hafif düzeyde soğuk",
"Sonalp - Son yiğit anlamında en son doğan erkek çocuğa konulan isim",
"Sonay - Son güzel anlamında son doğan çocuğa konulan isim",
"Soner - Son yiğit anlamında son doğan çocuğa konulan isim",
"Sonsuz - Ebediyete kadar sürecek olan - ebedi",
"Sunay - İyilik yapan - Yüreği ay gibi parlak olan",
"Sungur - Akdoğan",
/*-----------------------------Ş Harfi isimleri -------------- ----------------------------------------- */
"Şanlı - Tanınmış ad sahibi ",
"Şaylan - Eski Türklerde bayram kutlamaları",
"Şen - Mutlu - neşeli",
"Şener - Neşeli",
"Şenol - Daima neşeli olan",
"Şensoy - Neşesi soyundan alan",
"Şeren - Çevik",
"Şeylan - Eski Türklerde bayram kutlamaları",
"Şırıl - Akarsu sesi",
/*-----------------------------T Harfi isimleri -------------- ----------------------------------------- */
"Talay - Türkmitolojisinde Okyanus Tanrısı",
"Talu - Çok bilgili kişi - Okyanus",
"Tan - Günün ilk ışıklarının belirdiği zama",
"Tanal - Şafak sökmeden önce beliren kızıll",
"Tanalp - Şafak sökmesi gibi huzurlu yiğit kimse",
"Taner - Şafak sökmesi gibi huzurlu yiğit kimse",
"Tanju - Tanhu- Hun kağanılarının ünvanı",
"Tankutay - İpek gibi parıldayan şafak ışığı",
"Tansen - Tan gibi huzurlu",
"Tantuğ - Sabahın doğuşunun alametleri",
"Tardu - Armağan - hediye",
"Targutay - Türk mitolojisinde ilk insan - Adem",
"Tarkan - Eski Türklerde bir soyluluk unvanı - Saygın kişi",
"Taşkın - Coşkulu - heyecanlı",
"Taygun - Torun",
"Taykut - Kutlu ",
"Tekin - Prens - güvenilir ",
"Teoman - Mete Han'ın babası - duman",
"Timur - Timur imparatorluğunun Türk hükümdarı - demir",
"Tolga - Zırhlı başlık",
"Tolgay - Yaşama alanı - çevre",
"Tolun- Türk mitolojisinde Verimlilik Tanrısı",
"Tolunay - Eski Türkçe dolunay",
"Tolunbay - Dolunay kadar güzel anlamında ",
"Tomurcuk - Bitkiden doğan filiz",
"Toprak - Ülke ",
"Toralp - Gururlu",
"Torku - İpek",
"Toygan - Varlıklı - mülk sahibi",
"Toygar - Bir tür serçe",
"Tuğra - Osmanlı hükümdarlarının imzası",
"Tuğrul - Dumrul adlı yırtıcı bir kuş türü",
"Tuğşad - Buhara 'nın yöneticisi - kağanın yardımcısı",
"Tulpar - Türk mitolojisindeki kanatlı at ",
"Tuman - Teoman adının aslı - Duman - Mete Han'ın babası",
"Tuna - Bir kaplan türü",
"Tunahan - Kaplan kadar güçlü han",
"Tunay - Sükunet - Gece aydınlığı"
];
const getRandomNumber = (max) => Math.floor(Math.random() * max);

const getRandomName = () => 
  `${firstNames[getRandomNumber(firstNames.length)]}`;

const setRandomName = () => {
  document.getElementById('random-name').innerText = getRandomName();
}

document.getElementById('generate')
  .addEventListener('click', setRandomName);

setRandomName();
