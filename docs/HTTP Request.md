<h3 class="text-2xl font-bold">Invoke-WebRequest</h3>
<p>Invoke-WebRequest, web sayfalarından veri almak ve veri göndermek için kullanılan bir PowerShell komutudur.</p>
<p>Bu komut, PowerShell içinde web istekleri yapmamıza olanak tanır ve böylece istediğimiz web sayfalarından bilgi alabiliriz.</p>

<img src="https://github.com/Hasan-Kilici/powershell-dersleri/assets/105741983/a12e5e3f-3533-49c8-9bb9-89cb2c595fcf" class="h-auto max-w-100 rounded-lg shadow-xl dark:shadow-gray-800">

<p>Invoke-WebRequest komutu, belirtilen URI'ye (Uniform Resource Identifier) bir web isteği göndermek için kullanılır.</p>
<p>Google'daki arama sonuçlarını alabileceğimiz bir kod örneği ile başlayalım</p><br>
<div class="max-w-full overflow-auto bg-gray-200 dark:bg-gray-800 p-1 rounded-lg">
<pre><code class="text-blue-500 language-powershell">
$R = Invoke-WebRequest -URI https://www.google.com/search?q=kedi
$R.Images

</code>
</pre>
</div><br>

<p>Bu PowerShell kodu, Invoke-WebRequest komutunu kullanarak Google'da "muz" kelimesiyle yapılan bir arama sonucunda bulunan resimleri çekmektedir.</p>
<p>İlk olarak, <code class="bg-gray-200 dark:bg-gray-800 p-1 rounded-lg">$R</code> adında bir değişken oluşturulmuştur. Invoke-WebRequest komutu, belirtilen URI olan <a class="font-medium text-blue-600 dark:text-blue-500 hover:underline" href="https://www.google.com/search?q=muz">
https://www.google.com/search?q=muz
</a> adresine bir web isteği gönderir. Bu isteğin sonucu, <code class="bg-gray-200 dark:bg-gray-800 p-1 rounded-lg">$R</code> değişkenine atılır.</p>
<p>Daha sonra, <code class="bg-gray-200 dark:bg-gray-800 p-1 rounded-lg">$R.Images</code> ifadesi kullanılarak <code class="bg-gray-200 dark:bg-gray-800 p-1 rounded-lg">$R</code> değişkeninde bulunan resimlerin bir koleksiyonu alınır. Bu koleksiyon, web isteğinin sonucunda bulunan tüm resimleri temsil etmektedir.</p>
<p>Son olarak, <code class="bg-gray-200 dark:bg-gray-800 p-1 rounded-lg">$R.Images</code> ifadesi kullanılarak elde edilen resimlerin bilgileri görüntülenir. Her bir resim, bir URL (Resimlerin konumunu temsil eden bir bağlantı) ve diğer ilgili özelliklerle birlikte temsil edilir.</p>
<p>Bu kodu çalıştırdıktan sonra, "muz" kelimesiyle yapılan bir Google aramasının sonucunda bulunan resimlerin URL'lerini ve ilgili bilgilerini alabilirsiniz.</p>

<h3 class="text-2xl font-bold">API örneği</h3>
<p>Şimdi Powershell ile API'den veri alma örneği göstericem.</p>

<div class="max-w-full overflow-auto bg-gray-200 dark:bg-gray-800 p-1 rounded-lg">
<pre><code class="text-blue-500 language-powershell">
$R = Invoke-WebRequest -URI https://api.github.com/users/hasan-kilici -Method get
$table = $R.Content | ConvertFrom-Json | Select-Object
$table.login

</code>
</pre>
</div><br>

<p>Sonuç olarak Hasan-Kilici yazacaktır.</p>
