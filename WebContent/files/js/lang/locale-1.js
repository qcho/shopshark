var locale = {
	id : "1",
	code : "en",
	web : {
		"l_search" : "Search",
		"l_language" : "Change languaje: ",
		"b_asc" : "Ascending Order",
		"b_desc" : "Descending Order",
		"p_copyright" : "All rights reserved.",
		"l_cart" : "Cart",
		"p_noitems": "The cart is empty.",
		"l_loading" : "Processing",
		"l_newaccount" : "Create Account",
		"l_search_results" : "Results for",
		"l_category" : "Category",
		"l_subcategory" : "Subcategory",
		"l_user_panel" : "User panel",
		"l_order_list" : "Orders",
		"p_welcome" : "Hi!, welcome to ShopShark. We beleave you are going to have",
		"p_welcome2" : "todo",
		success_register: "Thanks for registering at Shopshark. Start enjoying our services now!"

	},
	template : {
		product_thumb : {
			"l_sales_rank" : "Sales rank"
		},
		paginator:{
			"l_prev" : "Previous",
			"l_next" : "Next"
		},
		product : {
			"l_category": "Category",
			"l_subcategory": "Subcategory",
			"l_name" : "Name",
			"l_sales_rank" : "Sales rank",
			"l_actors" : "Actors",
			"l_format" : "Format",
			"l_language" : "Laguaje",
			"l_subtitles" : "Subitles",
			"l_region" : "Region",
			"l_aspect_ratio" : "Aspect Ratio",
			"l_number_discs": "Number of discs",
			"l_release_date" : "Release date",
			"l_run_time" : "Runtime",
			"l_ASIN" : "ASIN(Amazon Standard Identification Number)",
			"l_authors" : "Authors",
			"l_publisher" : "Publisher",
			"l_published_date" : "Published date",
			"l_ISBN_10" : "ISBN 10",
			"l_ISBN_13" : "ISBN 13",
			"b_buy" : "Buy",
			"b_for" : "for",
			"b_back": "Back",
			"b_to": "to"
		},
		signIn : {
			"l_signIn" : "Sign in",
			"l_username": "Username",
			"l_password": "Password",
			"b_login": "Login",
			"l_register": "Not registered yet?",
			"b_register": "Register now"
		},
		
		userNav : {
			"l_user_data" : "User data",
			"l_username" : "Username",
			"l_full_name" : "Full name",
			"l_last_login" : "Last login",
			"b_signout" : "Close session",
			p_userpanel: "User panel"
		},
		
		cart : {
			"b_subtotal" : "Subtotal",
			"b_checkout" : "Checkout",
			"b_clear" : "Clear",
			"p_loading" : "loading..."
		},
		register:{
			l_register: "Register",
			l_username: "Username",
			l_password: "Password",
			l_confirm_password: "Confirm password",
			l_name: "Name",
			l_email: "Email",
			l_date: "Birth Date",
			h_required: "required",
			b_submit: "Register",
			b_back: "Back"
		},
		address_form:{
			l_full_name: "Full name",
			l_address_line: "Address line",
			l_zip_code:"Zip code",
			l_phone_number:"Phone number",
			l_country:"Country",
			l_state:"State",
			l_city:"City",
			l_new_name:"New address name",
			b_update: "Update",
			b_delete: "Delete",
			l_new: "New address",
			b_new: "Create New",
			b_back: "Back"
		},
		order_detail:{
		    l_order: "Order",
		    l_address: "Address",
		    l_status: "Status",
		    l_progress: "View progress",
		    l_products: "View products",
		    l_unconfirmed: "Unconfirmed",
		    l_status_1: "Unconfirmed",
		    l_status_2: "Confirmed",
		    l_status_3: "In transport",
		    l_status_4: "Delivered"
		}
	},
	validator: {
		required: "This field is required.",
		remote: "Please fix this field.",
		email: "Please enter a valid email address.",
		url: "Please enter a valid URL.",
		date: "Please enter a valid date.",
		dateISO: "Please enter a valid date (yyyy-mm-dd).",
		number: "Please enter a valid number.",
		digits: "Please enter only digits",
		creditcard: "Please enter a valid credit card number.",
		equalTo: "Please enter the same value again.",
		accept: "Please enter a value with a valid extension.",
		maxlength: $.validator.format("Please enter no more than {0} characters."),
		minlength: $.validator.format("Please enter at least {0} characters."),
		rangelength: $.validator.format("Please enter a value between {0} and {1} characters long."),
		range: $.validator.format("Please enter a value between {0} and {1}."),
		max: $.validator.format("sPlease enter a value less than or equal to {0}."),
		min: $.validator.format("Please enter a value greater than or equal to {0}.")
	},
	error : {
		"1" : "The request requieres a method which was not provided.",
		"2" : "The request requieres a langaje identifier which was not provided.",
		"3" : "The request requieres an identifier de país which was not provided.",
		"4" : "The request requieres a user which was not provided.",
		"5" : "The request requieres a password which was not provided.",
		"6" : "The request requieres the auntentication token which was not provided.",
		"7" : "The request requieres the user account information which was not provided.",
		"8" : "The request requieres the new password which was not provided.",
		"9" : "The request requieres a category identifier which was not provided.",
		"10" : "The request requieres a sub-category identifier which was not provided.",
		"11" : "The request requieres a search criteria which was not provided.",
		"12" : "The request requieres a product identifier which was not provided.",
		"13" : "The request requieres an order identifier which was not provided.",
		"14" : "The request requieres an address identifier which was not provided.",
		"15" : "The request requieres the item information which was not provided.",
		"16" : "The request requieres the address information which was not provided.",
		"17" : "The request requieres a value to store which was not provided.",
		"101" : "The provided requested method is invalid.",
		"102" : "The provided languaje identifier is invalid.",
		"103" : "The provided country identifier is invalid.",
		"104" : "The username is invalid.",
		"105" : "The autentication token is invalid.",
		"106" : "",
		"107" : "The username is invalid (minimun length 1 and maximun 15 characters).",
		"108" : "The password is invalid (minimun length 8 and maximun 15 characters).",
		"109" : "The name is invalid (minimun length 1 and maximun 80 characters).",
		"110" : "The email address is invalid (minimun length 1 and maximun 128 characters).",
		"111" : "The birth date is invalid.",
		"112" : "The provided category identifier is invalid.",
		"113" : "The provided sub-category identifier is invalid.",
		"114" : "The provided product identifier is invalid.",
		"115" : "The provided order identifier is invalid.",
		"116" : "The requested operation is invalid for this order state.",
		"117" : "The provided address identifier is invalid.",
		"118" : "The provided reference name is invalid (minimun length 1 and maximun 80 characters).",
		"119" : "The provided main address is invalid (minimun length 1 and maximun 80 characters).",
		"120" : "The provided secondary address is invalid (minimun length 1 and maximun 80 characters).",
		"121" : "The provided state identifier is invalid.",
		"122" : "The provided city ciudad is invalid (minimun length 1 and maximun 80 characters).",
		"123" : "The provided zip code is invalid (minimun length 1 and maximun 8 characters).",
		"124" : "The provided telephone number is invalid (minimun length 1 and maximun 25 characters).",
		"125" : "",
		"201" : "The username is already in use.",
		"202" : "The address is already in use.",
		"999" : "An unexpected error ocurred while procesing the request."
	}
};
