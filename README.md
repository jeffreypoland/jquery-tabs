#jQuery Tabs

jQuery Tabs allows you to create tabbed navagation for displaying content..

##How to Use
- Requires jQuery
- Include tabs.min.js
- Include tabs.css

=> Use this HTML markup:

```html
    <head>
    <!- Link CSS ->
	 <link href="css/tabs.css" rel="stylesheet">
    </head>
    
    <body>

   <!- Tabs Setup ->
   <div class="tabs"> 
 
    <ul>
        <!-- tabs -->
         <li class="tab" data-tab="tab1"><a href="#">Tab 1</a></li>
         <li class="tab" data-tab="tab2"><a href="#">Tab 2</a></li>
         <li class="tab" data-tab="tab3"><a href="#">Tab 3</a></li>
    </ul>
        <!-- tab content -->
         <div class="tab1"> <p>Vestibulum vitae justo sit amet dui malesuada feugiat. Aenean luctus sed enim ac semper. Maecenas feugiat rutrum leo vitae accumsan. Sed non molestie metus, at scelerisque sem. Proin accumsan justo ac adipiscing ullamcorper. Pellentesque euismod in velit in pellentesque. Nullam eu dapibus nisi. Vivamus ut lectus vehicula nisi gravida rutrum sit amet a mi. Aliquam erat volutpat. Donec pellentesque odio quam, sed semper mauris condimentum in. Quisque vulputate dapibus massa, et vestibulum quam porta id. Sed feugiat vitae massa nec lacinia. Mauris blandit malesuada orci sit amet lacinia. </p></div>
 
         <div class="tab2"> <p>Nam aliquet rhoncus libero a facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed lorem ante, ultricies sed dui vitae, tincidunt cursus enim. Sed dignissim porta porta. Donec suscipit rhoncus sem, at feugiat dolor mattis in. Sed cursus lectus nulla, id sollicitudin sem euismod nec. Nam pulvinar interdum ante, sit amet varius nulla ornare et. In at tempor lectus. Sed hendrerit consequat fermentum. Donec ultricies erat vitae velit fermentum sagittis. Vivamus lacinia tempor metus.</p></div>
 
         <div class="tab3"><p>Mauris sed sollicitudin nisl. Cras vulputate lacinia lorem, non cursus diam semper eget. Nunc tellus ligula, dapibus id lacus in, vehicula tempus eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pellentesque vestibulum augue, nec semper nisi varius ut. Curabitur eu felis vel ante iaculis molestie at sodales turpis. Morbi in mauris non sem semper tempor sit amet scelerisque tellus. Ut at ornare urna. Fusce ac malesuada risus. Fusce auctor eros eu arcu volutpat consequat. Morbi vitae tortor eget turpis egestas sollicitudin ut eget nunc. Etiam non pellentesque velit, nec faucibus odio. Nulla et posuere nisl. Morbi et velit sed lacus molestie ultricies a at elit. Maecenas hendrerit dolor arcu, vitae luctus justo blandit et.</p></div> 
 
   </div> 

     <!- Link jQuery ->
     <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script> 
 	 <!- Link Tabs ->
	 <script src="js/tabs.min.js"></script>

	 </body>
```
##Demo
[Tabs Demo Site](http://www.jeffreyjpoland.com/jquery/tabs/)
