$.template("address_form",
"<fieldset>" +
"<legend>${loc.l_title}</legend>"+
"{{each addresses.address}}" +
"<form class='address' id='address_${$value.id}' method='post' action=''>" +
	"{{if $value.id}}" +
	"	<input id='address_id' name='address_id' type='hidden' value='${$value.id}'/>" +
	"{{/if}}" +
	"<fieldset>" +
	"<legend><input type='text' name='full_name' class='{required:true, minlength:1, maxlength:15}' value='${$value.full_name}'></legend>" +
"    <div class='description'>" +
"        <table>" +
"			<tbody>" +
"            <tr>" +
"                <td colspan='2'>" +
"                    ${loc.l_address_line} 1:<br />" +
"                    <input name='address_line_1' type='text' class='{required:true, minlength:1, maxlength:80}' value='${$value.address_line_1}'>" +
"                </td>" +
"                <td colspan='1' class='short'>" +
"                    ${loc.l_phone_number}:<br />" +
"                    <input type='text' name='phone_number' class='{required:true, number:true, minlength:1, maxlength:15}' value='${$value.phone_number}'>" +
"                </td>" +
"            </tr>" +
"            <tr>" +
"                <td colspan='2'>" +
"                    ${loc.l_address_line} 2:<br />" +
"                    <input type='text' name='address_line_2' class='{required:true, minlength:1, maxlength:15}' value='${$value.address_line_2}'>" +
"                </td>" +
"                <td colspan='1' class='short'>" +
"                    ${loc.l_zip_code}:<br />" +
"                    <input type='text' name='zip_code' class='{required:true, minlength:1, maxlength:15}' value='${$value.zip_code}'>" +
"                </td>" +
"            </tr>" +
"            <tr>" +
"                <td>" +
"                    ${loc.l_country}:<br />" +
"                    <select name='country_id' class='{required:true}'>" +
"                        {{each(i,country) country_list}}" +
"                            <option value='${country.id}' {{if (country.id == $value.country_id)}}selected=selected{{/if}}>${country.name}</option>" +
"                        {{/each}}" +
"                    </select>" +
"                </td>" +
"                <td>" +
"                    ${loc.l_state}:<br />" +
"                    <select name='state_id' class='{required:true}'></select>" +
"                </td>" +
"                <td>" +
"                    ${loc.l_city}:<br />" +
"                    <input type='text' name='city' class='{required:true, minlength:1, maxlength:15}' value='${$value.city}'>" +
"                </td>" +
"            </tr>" +
"            <tr>" +
"			    <td colspan='3' class='buttons'>" +
"					{{if $value.id >= 0}}" +
"					    <input class='button submit greenbutton_big' type='submit' value='${loc.b_update}'/>" +
//"						<button class='button submit greenbutton_big' onclick='shopshark.deleteAddress(${$value.id})'>${loc.b_delete}</button>" +
"					{{else}}" +
"						<input class='button submit bluebutton' type='submit' value='${loc.b_new}'/>" +
"					{{/if}}" +
"               </td>" +
"            </tr>" +
"        </tbody>" +
"		</table>" +
"	</div>" +
"			<p>" +
"			</p>" +
"</fieldset>" +
"</form>" + 
"{{/each}}" +
"</fieldset>" +
"<div id='bottombar'>" +
"	<a href='#remove=userpanel' class='bluebutton'>" +
"		<span class='left'></span><span class='right'></span>" +
"		${loc.b_back}" +
"	</a>" +
"</div>"
);

$.template("order_detail",
"{{each(i, o) orders}}" +
"    <div class='order'>" +
"      <h4>${loc.l_order} ${o.id}</h4>" +
"      <div class='description'>" +
"        <table><tbody>" +
"        <tr>" +
"          <td>${loc.l_address}: </td>" +
"          <td>${o.address}</td>" +
"        </tr>" +
"        <tr>" +
"          <td>${loc.l_status}:</td>" +
"          <td>${o.status_desc}</td>" +
"        </tr>" +
"        <tr>" +
"          <td colspan='2' class='buttons'>" +
"            <input class='progress button submit greenbutton_big' type='submit' value='${loc.l_progress}'/>" +
"            <input class='products button submit greenbutton_big' type='submit' value='${loc.l_products}'/>" +
"          </td>" +
"        </tr>" +
"        <tr>" +
"          <td colspan='2'><ul class='itemlist'>{{each(j, item) o.items}} <li>Item</li> {{/each}}</ul></td>" +
"        </tr>" +
"        </tbody></table>" +
"      </div>" +
"    </div>" +
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
"		<div class='links'>" +
"			<a href='#userpanel'>${loc.p_userpanel}</a>"+
"		</div>" +
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
"		{{if !name}}" +
"			<legend>${loc.l_register}</legend>" +
"		{{else}}" +
"			<legend>${loc.l_update}</legend>" +
"		{{/if}}" +
"		{{if !name}}" +
"			<p>" +
"				<label for='cusername'>${loc.l_username} <span class='hint'>(${loc.h_required})</span></label>" +
"				<input id='cusername' name='username' class='{required:true, minlength:1, maxlength:15}'/>" +
"			</p>" +
"			<p>" +
"				<label for='cpassword'>${loc.l_password} <span class='hint'>(${loc.h_required})</span></label>" +
"				<input id='cpassword' name='password' type='password' class='{required:true, minlength:8, maxlength:15}' />" +
"			</p>" +
"			<p>" +
"				<label for='cconfpassword'>${loc.l_confirm_password} <span class='hint'>(${loc.h_required})</span></label>" +
"				<input id='cconfpassword' name='password' type='password' class='{equalTo: \"#cpassword\"}' />" +
"			</p>" +
"			<p>" +
"		{{/if}}" +
"				<label for='cname'>${loc.l_name} <span class='hint'>(${loc.h_required})</span></label>" +
"				<input id='cname' name='name' class='{required:true, minlength:1, maxlength:80}' {{if name}}value='${name}'{{/if}}/>" +
"			</p>" +
"			<p>" +
"			<label for='cemail'>${loc.l_email} <span class='hint'>(${loc.h_required})</span></label>" +
"				<input id='cemail' name='email' class='{required:true, minlength:1, email:true, maxlength:128}' {{if email}}value='${email}'{{/if}}/>" +
"			</p>" +
"			<p>" +
"				<label for='cdate'>${loc.l_date} <span class='hint'>(${loc.h_required})</span></label>" +
"				<input id='cdate' name='birth_date' class='{required:true, minlength:1, dateISO:true, maxlength:128}' {{if birth_date}}value='${birth_date}'{{/if}}/>" +
"			</p>" +
"		{{if name}}" +
"			<p>" +
"				<input class='submit greenbutton_big' type='submit' value='${loc.b_submit_update}'/>" +
"			</p>" +
"		{{else}}" +
"			<p>" +
"				<input class='submit bluebutton' type='submit' value='${loc.b_submit}'/>" +
"			</p>" +
"		{{/if}}" +
"		</fieldset>" +
"	</form>" +
"</div>" + 
"{{if !name}}" +
"	<div id='bottombar'>" +
"		<a href='#remove=register' class='bluebutton'>" +
"			<span class='left'></span><span class='right'></span>" +
"			${loc.b_back}" +
"		</a>" +
"	</div>" +
"{{/if}}"
);

$.template("checkout",
"<div id='checkout'>" +
"   <form id=''>" +
"      <h4>${loc.l_your_order}:</h4>" +
"      <ul>" +
"           {{each(i, item) items}}" +
"               <li>${item.qty} x ${item.name}</li>" +
"           {{/each}}" +
"      </ul>" +
"      <input name='buy' class='button submit greenbutton_big' type='submit' value='${loc.b_confirm}'/>" +
"   </form>" +
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

$.template("change_password",
"<div id='change_password'>" +
"	<form class='cmxform' method='post' action=''>" +
"		<fieldset>" +
"			<legend>${loc.l_changepassword}</legend>" +
"			<p>" +
"				<label for='ccurrpassword'>${loc.l_currpassword} <span class='hint'>(${loc.h_required})</span></label>" +
"				<input id='ccurrpassword' name='password' type='password' class='{required:true, minlength:8, maxlength:15}' />" +
"			</p>" +
"			<p>" +
"				<label for='cpassword'>${loc.l_password} <span class='hint'>(${loc.h_required})</span></label>" +
"				<input id='cpassword' name='new_password' type='password' class='{required:true, minlength:8, maxlength:15}' />" +
"			</p>" +
"			<p>" +
"				<label for='cconfpassword'>${loc.l_confirm_password} <span class='hint'>(${loc.h_required})</span></label>" +
"				<input id='cconfpassword' name='new_password_conf' type='password' class='{equalTo: \"#cpassword\"}' />" +
"			</p>" +
"			<p>" +
"				<input class='submit greenbutton_big' type='submit' value='${loc.b_submit}'/>" +
"			</p>" +
"		</fieldset>" +
"	</form>" +
"</div>"
);
