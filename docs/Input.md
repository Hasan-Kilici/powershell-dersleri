<h3 class="text-2xl font-bold">PowerShell Input Alma</h3>

<p>PowerShell'de kullanıcıdan metin almak için <code class="bg-gray-200 dark:bg-gray-800 max-w-full overflow-auto p-1 rounded-lg">Read-Host</code> komutunu kullanabilirsiniz. Bu komut, kullanıcıya bir metin girilmesi için bir mesaj görüntüler ve ardından girilen metni PowerShell scriptine aktarır.</p>
<p>İşte <code class="bg-gray-200 dark:bg-gray-800 p-1 rounded-lg">Read-Host</code> komutunu kullanarak bir metin girişi almanın bir örneği:</p><br>

<div class="bg-gray-200 dark:bg-gray-800 p-1 rounded-lg">
   <pre>
   <code class="text-blue-500 language-powershell">
$input = Read-Host -Prompt "Metin giriniz"
</code>
</pre>
</div>

<p>Bu örnekte, -Prompt parametresiyle kullanıcıya gösterilecek metin belirtilir. Kullanıcı, metin girişi yapabilmek için bir satır bekleyecektir. Kullanıcının girdiği metin, $input değişkenine atanır ve daha sonra scriptte kullanılabilir.</p>
