# Resume Generation

After the **resume.md** is edited, choose a template with one of the following ***commands***...

```
cd/app/

./bin/md2resume html --template modern ../resume.md ../
./bin/md2resume pdf --template modern ../resume.md ../

./bin/md2resume html --template blockish ../resume.md ../
./bin/md2resume pdf --template blockish ../resume.md ../

./bin/md2resume html --template readable ../resume.md ../
./bin/md2resume pdf --template readable ../resume.md ../

./bin/md2resume html --template swissen ../resume.md ../
./bin/md2resume pdf --template swissen ../resume.md ../

./bin/md2resume html --template unstyled ../resume.md ../
./bin/md2resume pdf --template unstyled ../resume.md ../
```

<!--ADD TO-->
<!--
<script type="text/javascript">
    function loadHTML(){
        window.location.href = ("resume.html");

        function loadPDF(){
        	window.location.href = ("resume.pdf");
    	}
-->

<!--
</script>
<head>
-->
<!--*** to make page load with HTML Version: comment out this 'return' ***-->
<!--
    	return loadPDF();
    }
</script>
-->

<!--
<body onload="loadHTML()">
<!--(line:622)-->
<!--
	<p style="visibility: hidden">Grant Stampfli</p>
-->

<!--(current setup) - [ADD TO:] **resume.html**-->

<!--
(line:622)
<p style="visibility: hidden">Grant Stampfli</p>
-->
