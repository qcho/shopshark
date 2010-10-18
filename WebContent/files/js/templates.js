$.template("product_thumb", 
"{{each product}}" +
"	<div class='product' id='product_${$value.id}'>" +
"		<h4>${name} <span></span></h4>" +
"		<div class='imgholder'>" +
"			<a href='#product=${$value.id}'>" +
"				<img src='${$value.image_url}' class='productimg' height='104' width='119'>" +
"			</a>" +
"		</div>" +
"		<div class='description'>" +
"			<div class='wrap'>" +
"				${loc.l_sales_rank}: <span>${$value.sales_rank}</span>" +
"			</div>" +
"			<div class='buttons'>" +
"				<a href='#product=${$value.id}' class='greybutton'>" +
"					<span class='left'></span><span class='right'></span>" +
"					+Info" +
"				</a>" +
"				<a class='greenbutton' onclick='enstore.cart.addItem('256d6b9dd3dd46d7ab65aa45e3db7486')'>" +
"					<span class='left'></span><span class='right'></span>" +
"					<span class='formattedCurrency'>$${$value.price}</span>" +
"				</a>" +
"				<span class='in_cart'>" +
"					<span class='totalincart'>1</span> in<br>cart" +
"				</span>" +
"			</div>" +
"		</div>" +
"	</div>" +
"{{/each}}"
);

$.template("category",
"<div id='category_${id}_div' class='supermenu'>" +
"	<a id='category_${id}' href='#category=${id}'>${name}</a>" +
"	<hr>" +
"	<div class='submenu'>" +
"			<a href='#${code}'>loading...</a>" +
"	</div>" +
"</div>"
);

$.template("subcategory", 
"<a id='subcategory_${category_id}_${id}' href='#category=${category_id}&subcategory=${id}'>${name}</a>"
);

$.template("paginator",
"<div class='break'></div>" +
"<div id='bottombar'>" +
"	{{if prev}}" +
"		<a href='#page=${prev}' class='greybutton floatLeft'>" +
"			<span class='left'></span><span class='right'></span>" +
"			${loc.l_prev}" +
"		</a>" +
"	{{/if}}" +
"	{{if next}}" +
"		<a href='#page=${next}' class='greybutton floatRight'>" +
"			<span class='left'></span><span class='right'></span>" +
"			${loc.l_next}" +
"		</a>" +
"	{{/if}}" +
"	<div class='pagination'>" +
"		{{each pages}}" +
"			{{if $value}}" +
"				<span class='active'>${$index + 1}</span>&nbsp;" +
"    		{{else}}" +
"				<a href='#page=${$index + 1}'>${$index + 1}</a>&nbsp;" +
"    		{{/if}}" +
"		{{/each}}" +
"	</div>" +
"</div>"
);

$.template("product",
"<div id='gallery' class='centered'>" +
"</div>" +
"<div id='productdata'>" +
"	<div class='description-wrapper'>" +
"		<p>" +
"			<ul>" +
"				<li><strong>${loc.l_category}:</strong> ${category}</li>" +
"				<li><strong>${loc.l_subcategory}:</strong> ${subcategory}</li>" +
"				<li><strong>${loc.l_name}:</strong> ${name}</li>" +
"				<li><strong>${loc.l_sales_rank}:</strong> ${sales_rank}</li>" +
"			{{if actors}}" +
"				<li><strong>${loc.l_actors}:</strong> ${actors}</li>" +
"    		{{/if}}" +
"			{{if format}}" +
"				<li><strong>${loc.l_format}:</strong> ${format}</li>" +
"    		{{/if}}" +
"			{{if language}}" +
"				<li><strong>${loc.l_language}:</strong> ${language}</li>" +
"    		{{/if}}" +
"			{{if subtitles}}" +
"				<li><strong>${loc.l_subtitles}:</strong> ${subtitles}</li>" +
"    		{{/if}}" +
"			{{if region}}" +
"				<li><strong>${loc.l_region}:</strong> ${region}</li>" +
"    		{{/if}}" +
"			{{if aspect_ration}}" +
"				<li><strong>${loc.l_aspect_ration}:</strong> ${aspect_ration}</li>" +
"    		{{/if}}" +
"			{{if number_discs}}" +
"				<li><strong>${loc.l_number_discs}:</strong> ${number_discs}</li>" +
"    		{{/if}}" +
"			{{if release_date}}" +
"				<li><strong>${loc.l_release_date}:</strong> ${release_date}</li>" +
"    		{{/if}}" +
"			{{if run_time}}" +
"				<li><strong>${loc.l_run_time}:</strong> ${run_time}</li>" +
"    		{{/if}}" +
"			{{if ASIN}}" +
"				<li><strong>${loc.l_ASIN}:</strong> ${ASIN}</li>" +
"    		{{/if}}" +
"			{{if authors}}" +
"				<li><strong>${loc.l_authors}:</strong> ${authors}</li>" +
"    		{{/if}}" +
"			{{if publisher}}" +
"				<li><strong>${loc.l_publisher}:</strong> ${publisher}</li>" +
"    		{{/if}}" +
"			{{if published_date}}" +
"				<li><strong>${loc.l_published_date}:</strong> ${published_date}</li>" +
"    		{{/if}}" +
"			{{if ISBN_10}}" +
"				<li><strong>${loc.l_ISBN_10}:</strong> ${ISBN_10}</li>" +
"    		{{/if}}" +
"			{{if ISBN_13}}" +
"				<li><strong>${loc.l_ISBN_13}:</strong> ${ISBN_13}</li>" +
"    		{{/if}}" +
"			</ul>" +
"		</p>" +
"	</div>" +
"	<div class='button-wrapper'>" +
"		<a class='greenbutton_big'>" +
"		<span class='left'></span><span class='right'></span>" +
"		${loc.b_buy} <span class='for'>${loc.b_for}</span> <span class='formattedCurrency'>$${price}</span>" +
"	</a>" +
"	</div>" +
"</div>" +
"<div id='bottombar'>" +

"	<a href='#category=${category_id}' class='bluebutton'>" +
"		<span class='left'></span><span class='right'></span>" +
"		${loc.b_back} <span>${loc.b_to}</span> ${category}" +
"	</a>" +
"</div>"
);

$.template("signIn",
"<div id='signIn'>" +
"	<fieldset>" +
"		<legend>${l_signIn}</legend>" +
"		<form action='' method='post'>" +
"			<div>" +
"				<label for='username'>${l_username}: </label>" +
"				<input id='username' name='username'>" +
"				<label for='password'>${l_password}: </label>" +
"				<input id='password' name='password' type='password'>" +
"			</div>" +
"			<div class='centered'>" +
"				<input class='greenbutton smalltopmargin' name='submit' type='submit' value='${b_login}'>" +
"			</div>" +
"		</form>" +
"	</fieldset>" +
"	<div class='centered smalltopmargin'>" +
"		${l_register}" +
"		<button class='bluebutton right smalltopmargin'>${b_register}</button>" +
"	</div>" +
"</div>"		
);

$.template("userNav",
"<div id='signIn'>" +
"	<fieldset>" +
"		<legend>User</legend>" +
"		<p>${username}</p>" +
"		<p>${name}</p>" +
"		<p>${last_login_date}</p>" +
"	</fieldset>" +
"	<div class='centered smalltopmargin'>" +
"		<button class='bluebutton right smalltopmargin' onclick='shopshark.signOut()'>Sign Out</button>" +
"	</div>" +
"</div>"		
);