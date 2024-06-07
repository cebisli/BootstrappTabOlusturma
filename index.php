<html>
  <head>
   <title>Page Yapısı Oluşturma</title>
  </head>
   <body>
      <div class="page-tab clearfix">
      	<div id='istatistik' title='Anket Sonuçları' url='1/3'>
      		Anket Sonuçları
      	</div>
      	<div id="grafik" title='Soru Sonuçları' url='1/4'>
      		Soruların Sonuçları
      	</div>
      	<div id="genel_toplam" title='Genel Toplam' url='1/5'>
      		Genel Toplam
      	</div>
      	<div id='detayli' title='Detaylı Sonuçlar' url='1/6'>
      		Detaylı Sonuçlar
      	</div>
      </div>
     <script src="bs.js"></script>
     
     $(function(){
		  BSui.tabs('.page-tab');
  	});
  </body>
</html>
