<h2 class="text-2xl font-bold">Döngüler</h2>
<br>
<h3 class="text-xl font-bold">Döngüler ve İşlevleri</h3>
<p>Döngüler, programlamada tekrarlayan işlemleri gerçekleştirmek için kullanılan önemli bir yapıdır.</p>
<p>PowerShell'da da farklı döngü türleri bulunur ve bu döngüler, belirli bir koşulu sağlayan veya bir dizi üzerinde gezinme işlemi yapılmasını sağlar.</p><br>

<h3 class="text-xl font-bold">1. For Döngüsü</h3>
<p>For döngüsü, belirli bir başlangıç değeriyle başlayarak bir koşulu sağladığı sürece tekrarlayan bir döngü türüdür.</p>
<p>Genellikle bir sayaç değişkeni kullanılır ve her adımda sayaç değişkeni güncellenir.</p><br>
<p>Örneğin:</p>
<div class="max-w-full overflow-auto bg-gray-200 dark:bg-gray-800 p-1 rounded-lg">
<pre><code class="text-blue-500 language-powershell">
$meyveler = @("Elma", "Muz", "Üzüm")

for ($i = 0; $i -lt $meyveler.length; $i++) {
    $meyveler[$i]
}

</code>
</pre>
</div><br>
<p>Bu örnekte, <code class="bg-gray-200 dark:bg-gray-800 p-1 rounded-lg">$meyveler</code> dizisindeki her bir meyveyi ekrana yazdırmak için for döngüsü kullanıyoruz.</p>
<p>Sayaç değişkeni <code class="bg-gray-200 dark:bg-gray-800 p-1 rounded-lg">$i</code> başlangıçta <code class="bg-gray-200 dark:bg-gray-800 p-1 rounded-lg">0</code> olarak tanımlanır ve dizi uzunluğundan küçük olduğu sürece döngü devam eder.</p>
<p>Her adımda sayaç değeri bir artırılır ve $meyveler[$i] ifadesi ile meyveler sırasıyla yazdırılır.</p><br>

<h3 class="text-xl font-bold">2. Foreach Döngüsü</h3>
<p>Foreach döngüsü, bir koleksiyonun (dizi, liste, sözlük vb.) her bir öğesi üzerinde gezinmeyi sağlar.</p>
<p>Her bir adımda, koleksiyondaki bir öğeyi temsil eden bir değişken kullanılır.</p><br>
<p>Örneğin:</p>
<div class="max-w-full overflow-auto bg-gray-200 dark:bg-gray-800 p-1 rounded-lg">
<pre><code class="text-blue-500 language-powershell">
$meyveler = @("Elma", "Muz", "Üzüm")

foreach ($meyve in $meyveler) {
    $meyve
}

</code>
</pre>
</div><br>

<p>Bu örnekte, <code class="bg-gray-200 dark:bg-gray-800 p-1 rounded-lg">$meyveler</code> dizisindeki her bir meyveyi ekrana yazdırmak için foreach döngüsünü kullanıyoruz.</p>
</p>Her adımda, <code class="bg-gray-200 dark:bg-gray-800 p-1 rounded-lg">$meyve</code> değişkeni mevcut dizi öğesini temsil eder ve bu değer ekrana yazdırılır.</p><br>

<h3 class="text-xl font-bold">3. While Döngüsü</h3>
<p>While döngüsü, belirli bir koşul sağlandığı sürece tekrarlayan bir döngü türüdür.</p>
<p>Başlangıçta koşul kontrol edilir ve koşul doğru olduğu sürece döngü devam eder.</p><br>
<p>Örneğin:</p>
<div class="max-w-full overflow-auto bg-gray-200 dark:bg-gray-800 p-1 rounded-lg">
<pre><code class="text-blue-500 language-powershell">
$meyveler = @("Elma", "Muz", "Üzüm")
$a = 0;

while ($a -lt $meyveler.length) {
   $meyveler[$a]
   $a += 1
}

</code>
</pre>
</div><br>

<p>Bu örnekte, <code class="bg-gray-200 dark:bg-gray-800 p-1 rounded-lg">$meyveler</code> dizisindeki her bir meyveyi ekrana yazdırmak için while döngüsünü kullanıyoruz.</p> 
<p>Başlangıçta <code class="bg-gray-200 dark:bg-gray-800 p-1 rounded-lg">$a değişkeni</code> <code class="bg-gray-200 dark:bg-gray-800 p-1 rounded-lg">0</code> olarak tanımlanır ve <code class="bg-gray-200 dark:bg-gray-800 p-1 rounded-lg">$a</code> dizi uzunluğundan küçük olduğu sürece döngü devam eder.</p>
<p>Her adımda, meyve yazdırılır ve $a değeri bir artırılır.</p><br>

<h3 class="text-xl font-bold">4. Do-While Döngüsü</h3>
<p>Do-While döngüsü, koşul kontrolünü döngü bloğundan sonra yapar, yani döngü bloğu en az bir kez çalışır ve ardından koşul kontrol edilir.</p>
<p>Eğer koşul doğruysa, döngü devam eder, aksi halde döngü sona erer.</p><br>
<p>Örneğin:</p>
<div class="max-w-full overflow-auto bg-gray-200 dark:bg-gray-800 p-1 rounded-lg">
<pre><code class="text-blue-500 language-powershell">
$meyveler = @("Elma", "Muz", "Üzüm")
$a = 0;

do {
   $meyveler[$a]
   $a += 1
} while ($a -lt $meyveler.length)

</code>
</pre>
</div><br>

<p>Bu örnekte, <code class="bg-gray-200 dark:bg-gray-800 p-1 rounded-lg">$meyveler</code> dizisindeki her bir meyveyi ekrana yazdırmak için do-while döngüsünü kullanıyoruz.</p>
<p>Başlangıçta <code class="bg-gray-200 dark:bg-gray-800 p-1 rounded-lg">$a</code> değişkeni <code class="bg-gray-200 dark:bg-gray-800 p-1 rounded-lg">0</code> olarak tanımlanır ve döngü bloğu en az bir kez çalıştırılır.</p>
<p>Daha sonra, <code class="bg-gray-200 dark:bg-gray-800 p-1 rounded-lg">$a</code> dizi uzunluğundan küçük olduğu sürece döngü devam eder ve her adımda meyve yazdırılır.</p><br>

<p>Döngüler, programınızda tekrarlanan işlemleri gerçekleştirmek, verileri dizi veya koleksiyon üzerinde işlemek ve program akışını yönlendirmek için güçlü araçlardır.</p>
<p>Farklı döngü türlerini kullanarak kodunuzu daha esnek ve verimli hale getirebilirsiniz.</p>
