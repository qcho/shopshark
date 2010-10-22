$.template("address_form",
"{{each addresses.address}}" +
"<form class='address' id='address_${$value.id}' method='post' action=''>" +
	"{{if $value.id >= 0}}" +
	"    <h4>${$value.full_name}</h4>" +
	"{{else}}" +
		"<h4>${loc.l_new}</h4>" +
		"<input type='text' class='full_name' value='${loc.l_new_name}'>" +
	"{{/if}}" +
"    <div class='description'>" +
"        <table>" +
"			<tbody>" +
"            <tr>" +
"                <td colspan='2'>" +
"                    ${loc.l_address_line} 1:<br />" +
"                    <input type='text' class='address_line_1' value='${$value.address_line_1}'>" +
"                </td>" +
"                <td colspan='1' class='short'>" +
"                    ${loc.l_phone_number}:<br />" +
"                    <input type='text' class='phone_number' value='${$value.phone_number}'>" +
"                </td>" +
"            </tr>" +
"            <tr>" +
"                <td colspan='2'>" +
"                    ${loc.l_address_line} 2:<br />" +
"                    <input type='text' class='address_line_2' value='${$value.address_line_2}'>" +
"                </td>" +
"                <td colspan='1' class='short'>" +
"                    ${loc.l_zip_code}:<br />" +
"                    <input type='text' class='zip_code' value='${$value.zip_code}'>" +
"                </td>" +
"            </tr>" +
"            <tr>" +
"                <td>" +
"                    ${loc.l_country}:<br />" +
"                    <select class='country'>" +
"                        {{each(i,country) country_list}}" +
"                            <option value='${country.id}' {{if (country.id == $value.country_id)}}selected=selected{{/if}}>${country.name}</option>" +
"                        {{/each}}" +
"                    </select>" +
"                </td>" +
"                <td>" +
"                    ${loc.l_state}:<br />" +
"                    <select class='state'></select>" +
"                </td>" +
"                <td>" +
"                    ${loc.l_city}:<br />" +
"                    <input type='text' class='city' value='${$value.city}'>" +
"                </td>" +
"            </tr>" +
"            <tr>" +
"			    <td colspan='3' class='buttons'>" +
"					{{if $value.id >= 0}}" +
"					    <input class='button submit greenbutton_big' type='submit' value='${loc.b_update}'/>" +
"						<input class='button submit greenbutton_big' type='submit' value='${loc.b_delete}'/>" +
"					{{else}}" +
"						<input class='button submit greenbutton_big' type='submit' value='${loc.b_new}'/>" +
"					{{/if}}" +
"               </td>" +
"            </tr>" +
"        </tbody>" +
"		</table>" +
"	</div>" +
"			<p>" +
"			</p>" +
"</form>" + 
"{{/each}}"
);

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
"				<a class='greenbutton cart_buy' id='buy_${$value.id}'>" +
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
"		<a class='greenbutton_big cart_buy' id='buy_${id}'>" +
"			<span class='left'></span><span class='right'></span>" +
"			${loc.b_buy} <span class='for'>${loc.b_for}</span> <span class='formattedCurrency'>$${price}</span>" +
"		</a>" +
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
"				<input class='greenbutton_big smalltopmargin' name='submit' type='submit' value='${b_login}'>" +
"			</div>" +
"		</form>" +
"	</fieldset>" +
"	<div class='centered smalltopmargin'>" +
"		${l_register}" +
"		<a href='#register' class='bluebutton'>" +
"			<span class='left'></span><span class='right'></span>" +
"			${b_register}" +
"		</a>" +
"	</div>" +
"</div>"		
);

$.template("userNav",
"<div id='userNav'>" +
"	<fieldset>" +
"		<legend>${loc.l_user_data}</legend>" +
"		<p><strong>${loc.l_username}:</strong><br />" +
"		${username}</p>" +
"		<p><strong>${loc.l_full_name}:</strong><br />" +
"		${name}</p>" +
"		<p><strong>${loc.l_last_login}:</strong><br />" +
"		${last_login_date}</p>" +
"	</fieldset>" +
"	<div class='centered smalltopmargin'>" +
"		<a href='#logout' class='bluebutton'>" +
"			<span class='left'></span><span class='right'></span>" +
"			${loc.b_signout}" +
"		</a>" +
"	</div>" +
"</div>"		
);

$.template("cart",
"	<table class='alternating' cellpadding='0' cellspacing='0' border='0'>" +
"		<tbody class='chain-element' id='lines'>" +
"		{{each items.item}}" +
"			<tr class='item chain-item chain-element'>" +
"				<td><input class='quantity' id='count_${$value.product_id}' value='${$value.count}' type='text'></td>" +
"				<td class='name'><a href='#product=${$value.product_id}'>${loc.p_loading}</a></td>" +
"				<td class='subtotal formattedCurrency'>$${$value.price}</td>" +
"			</tr>" +
"		{{/each}}" +
"		</tbody>" +
"	</table>" +
"	<div class='totals'>" +
"	<span class='title'>${loc.b_subtotal}</span>" +
"	<span class='subtotal formattedCurrency'>$${total}</span>" +
"	</div>" +
"	<div class='buttons'>" +
"		<a href='#clear=${id}' class='greybutton'>" +
"			<span class='left'></span><span class='right'></span>" +
"			${loc.b_clear}" +
"		</a>" +
"		<a href='#checkout=${id}' class='greenbutton'>" +
"			<span class='left'></span><span class='right'></span>" +
"			${loc.b_checkout}" +
"		</a>" +
"		<span class='in_cart'>" +
"			<span class='totalincart'>1</span> in<br>cart" +
"		</span>" +
"	</div>"
);

$.template("register",

"<div id='register'>" +
"	<form class='cmxform' method='post' action=''>" +
"		<fieldset>" +
"			<legend>${loc.l_register}</legend>" +
"			<p>" +
"				<label for='cusername'>${loc.l_username} <span class='hint'>(${loc.h_required})</span></label>" +
"				<input id='cusername' name='username' class='{required:true, minlength:1, maxlength:15}' />" +
"			</p>" +
"			<p>" +
"				<label for='cpassword'>${loc.l_password} <span class='hint'>(${loc.h_required})</span></label>" +
"				<input id='cpassword' name='password' type='password' class='{required:true, minlength:8, maxlength:15}' />" +
"			</p>" +
"			<p>" +
"				<label for='cname'>${loc.l_name} <span class='hint'>(${loc.h_required})</span></label>" +
"				<input id='cname' name='name' class='{required:true, minlength:1, maxlength:80}' />" +
"			</p>" +
"			<p>" +
"			<label for='cemail'>${loc.l_email} <span class='hint'>(${loc.h_required})</span></label>" +
"				<input id='cemail' name='email' class='{required:true, minlength:1, email:true, maxlength:128}' />" +
"			</p>" +
"			<p>" +
"				<label for='cdate'>${loc.l_date} <span class='hint'>(${loc.h_required})</span></label>" +
"				<input id='cdate' name='dateISO' class='{required:true, minlength:1, dateISO:true, maxlength:128}' />" +
"			</p>" +
"			<p>" +
"				<input class='submit greenbutton_big' type='submit' value='${loc.b_submit}'/>" +
"			</p>" +
"		</fieldset>" +
"	</form>" +
"</div>"
);

$.template("myaccount",
"<div>" +
"	<ul class='tabs'>" +
"		<li><a href='#'>My Details</a></li>" +
"		<li><a href='#'>Orders</a></li>" +
"		<li><a href='#'>other...</a></li>" +
"	</ul>" +
"	<div class='panes'>" +
"		<div>First tab content. Tab contents are called 'panes'</div>" +
"		<div>Second tab content</div>" +
"		<div>Third tab content</div>" +
"	</div>" +
"</div>"
);
