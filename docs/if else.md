<h2 class="text-2xl font-bold">if else</h2>
<br>
<h3 class="text-xl font-bold">If-Else Yapısı ve İşlevi</h3>
<p>If-Else yapısı, programlamanın temel yapılarından biridir ve belirli bir koşulu değerlendirerek programın akışını kontrol etmeye yarar.</p>
<p>PowerShell'da da bu yapıyı kullanarak programınızı belirli koşullara göre yönlendirebilirsiniz.</p>
<p>İlk olarak, if bloğunu ele alalım. If bloğu, belirli bir koşulun doğru olduğu durumlarda belirtilen kod bloğunu çalıştırır. Eğer koşul yanlışsa, if bloğunun içindeki kod atlanır ve program else bloğuna geçer.</p>
<p>Else bloğu, if bloğunun koşulunun yanlış olduğu durumlarda çalıştırılacak olan kod bloğunu belirtir.</p><br>

<div class="max-w-full overflow-auto bg-gray-200 dark:bg-gray-800 p-1 rounded-lg">
<pre>
<code class="text-blue-500 language-powershell">

if (koşul) {
    # Koşul doğru ise çalıştırılacak kod bloğu
} else {
    # Koşul yanlış ise çalıştırılacak kod bloğu
}

</pre>
</code>
</div><br>

<p>Koşul, bir mantıksal ifade veya karşılaştırma operatörleri kullanılarak belirtilir. Örneğin, eşitlik kontrolü için <code class="bg-gray-200 dark:bg-gray-800 p-1 rounded-lg">-eq</code> operatörünü kullanabiliriz.</p>
<p>İşte bir örnek:</p>

<div class="max-w-full overflow-auto bg-gray-200 dark:bg-gray-800 p-1 rounded-lg">
<pre><code class="text-blue-500 language-powershell">
$deger = 5

if ($deger -eq 5) {
    Write-Host "Değer 5'e eşittir."
} else {
    Write-Host "Değer 5'e eşit değildir."
}


</pre>
</code>
</div><br>

If-Else yapısının genel sözdizimi aşağıdaki gibi olacaktır:
<h3 class="text-xl font-bold">Operatörler</h3>
<p>Powershellde maalesef <code class="bg-gray-200 dark:bg-gray-800 p-1 rounded-lg">==</code>,
<code class="bg-gray-200 dark:bg-gray-800 p-1 rounded-lg">!=</code>,
<code class="bg-gray-200 dark:bg-gray-800 p-1 rounded-lg">></code>,
<code class="bg-gray-200 dark:bg-gray-800 p-1 rounded-lg"><</code>,
<code class="bg-gray-200 dark:bg-gray-800 p-1 rounded-lg"><=</code>,
<code class="bg-gray-200 dark:bg-gray-800 p-1 rounded-lg">>=</code> gibi operatörler çalışmıyor. Powershellde ki operatörler şu şekilde</p>
<ol class="list-decimal list-inside pl-4">
  <li>Eşitlik kontrolü (==): <code class="bg-gray-200 dark:bg-gray-800 p-1 rounded-lg">-eq</code></li>
  <li>Eşit değil (!=): <code class="bg-gray-200 dark:bg-gray-800 p-1 rounded-lg">-ne</code></li>
  <li>Küçüktür (<): <code class="bg-gray-200 dark:bg-gray-800 p-1 rounded-lg">-lt</code></li>
  <li>Küçük veya eşit (<=): <code class="bg-gray-200 dark:bg-gray-800 p-1 rounded-lg">-le</code></li>
  <li>Büyüktür (>): <code class="bg-gray-200 dark:bg-gray-800 p-1 rounded-lg">-gt</code></li>
  <li>Büyük veya eşit (>=): <code class="bg-gray-200 dark:bg-gray-800 p-1 rounded-lg">-ge</code></li>
</ol><br>
<p>
