# Resume Generator

- PDF generation via [wkhtmltopdf](https://github.com/pdfkit/pdfkit/wiki/Installing-WKHTMLTOPDF)
- Responsive design for multiple device viewport sizes
- Simple Markdown formatting
- Single file deployment (no external stylesheets)


### _**Help**_ 
```
Usage:
  [options] command [arguments]

Options:
  --help           -h Display this help message.
  --quiet          -q Do not output any message.
  --verbose        -v|vv|vvv Increase the verbosity of messages: 1 for normal output, 2 for more verbose output and 3 for debug
  --version        -V Display this application version.
  --ansi              Force ANSI output.
  --no-ansi           Disable ANSI output.
  --no-interaction -n Do not ask any interactive question.

Available commands:
  help         Displays help for a command
  html         Generate an HTML resume from a markdown file
  list         Lists commands
  pdf          Generate a PDF from a markdown file
  selfupdate   Updates md2resume.phar to the latest version.
  stats        Generate a word frequency analysis of your resume
  templates    List available templates
  version      Show current version information
```
> #####Output Options:
To generate the **resume.md** to a html and or pdf format follow the steps below. Each of the examples below is a different [template]("modern, swissen, blockish, readable, and unstyled") output. 

The _**Templates**_ to Choose from are: **[modern]("#1"), [swissen]("#2"), [blockish]("#3"), [readable]("#4"), or [unstyled]("#5")**.

1. 
```
cd/app/
./bin/md2resume html --template modern ../resume.md ../
./bin/md2resume pdf --template modern ../resume.md ../
```
2.
```
cd/app/
./bin/md2resume html --template swissen ../resume.md ../
./bin/md2resume pdf --template swissen ../resume.md ../
```
3.
```
cd/app/
./bin/md2resume html --template blockish ../resume.md ../
./bin/md2resume pdf --template blockish ../resume.md ../
```
4.
```
cd/app/
./bin/md2resume html --template readable ../resume.md ../
./bin/md2resume pdf --template readable ../resume.md ../
```
5.
```
cd/app/
./bin/md2resume html --template unstyled ../resume.md ../
./bin/md2resume pdf --template unstyled ../resume.md ../
```


#####_Optional tweaks to add to:_  [index.html](http://grantstampfli.github.io/grs/index.html "This makes it so when you load the site the browser opens the desired file type.")

+ 
```
<head>
	<script type="text/javascript">
		// option: to load with HTML Version: comment out the return
		
    	function loadHTML(){
        	window.location.href = ("resume.html");
			function loadPDF(){
        	window.location.href = ("resume.pdf");
    		};
    	return loadPDF();
    	};
    </script>
</head>
```

+ ```<body onload="loadHTML()">```
	+ ```<p style="visibility: hidden">Grant Stampfli</p>
	```
___
> ####ACKNOWLEDGMENTS:
* The main template style gor this app was borrowed from the **[Sample Resume Template](http://sampleresumetemplate.net/ "A great starting point")**.
* The Markdown conversion tool was created by: **[Craig Davis](https://github.com/there4 "Author of the Markdown Generator")**
* The command line tool for PDF generations ([wkhtmltopdf](https://github.com/pdfkit/pdfkit/wiki/Installing-WKHTMLTOPDF ".md to .pdf")) was created by: **[Ashish Kulkarni](https://github.com/ashkulz "Author of the WKHTMLTOPDF commandline tool.")**