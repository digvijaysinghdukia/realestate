// Use the DOMContentLoaded event to ensure the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Insert HTML into the div with the ID 'targetDiv'
    var targetDiv = document.getElementById('navBar');
    if (targetDiv) {
      targetDiv.innerHTML = `
      <div id="nev_logo" class="logo-desk"><img title="logo" src="./logo_kh.webp"></div>
		<div id="nav_links">
			<h4 class="respo-desk-links">Commercial</h4>
			<h4 class="respo-desk-links">Residential</h4>
			<h4 class="respo-desk-links">Agriculture</h4>
			<span onclick="openNav()" class="respo-mob-icon">
				<svg xmlns="http://www.w3.org/2000/svg" height="24" fill="#000" viewBox="0 -960 960 960" width="24"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
			</span>
			<!-- mobile side nav -->
			<div id="mySidenav" class="sidenav">
			  <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
			  <a href="#">Commercial</a>
			  <a href="#">Residential</a>
			  <a href="#">Agriculture</a>
			  <a href="#">About</a>
			  <a href="#">Contact</a>
			</div>

		</div>
		<!--  -->

		<!-- search button -->
		
		<div id="nev_logo" class="logo-mobile"><img title="logo" src="./logo_kh.webp"></div>

		<div id="search-button">
			<svg onclick="openSearch()" xmlns="http://www.w3.org/2000/svg" height="24" fill="#000" viewBox="0 -960 960 960" width="24"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>

			
		</div>


		<!-- log in and register buttens  -->
		<div id="nav_btns">
			<button id="nav_login_btn" onclick="openLoginForm()">Log In</button>
		</div>	
		<!--  -->

<!-- nav-login-user-dropdown-->
		<!-- <div id="nav-login-user">
			<div class="dropdown">
			  <button class="dropbtn">
			  	
			  	<div id="nav-user-img">
			  		<img src="./logo_kh.webp">
			  	</div> Digvijay &#8595; </button>
			  <div class="dropdown-content">
			    <a href="#">Edit profile</a>
			    <a href="#">Add Property</a>
			    <a href="#">Payments</a>
			    <a href="#">Change Password</a>
			    <a href="#">Log Out</a>
			  </div>
			</div>
		</div> -->
		<div id="search-slide">
			<svg xmlns="http://www.w3.org/2000/svg" onclick="closeSearch()" height="24" fill="#000" viewBox="0 -960 960 960" width="24"><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"/></svg>

			  <div class="searchBar">
					<input id="searchQueryInput" type="text" name="searchQueryInput" placeholder="Search" value="" />
					<button id="searchQuerySubmit" type="submit" name="searchQuerySubmit">
					  <svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="#666666" d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
					  </svg>
					</button>
				  </div>
		</div>
      
      
      `;
    }
  });

  document.addEventListener('DOMContentLoaded', function() {
    // Insert HTML into the div with the ID 'targetDiv'
    var targetDiv = document.getElementById('dnavBar');
    if (targetDiv) {
      targetDiv.innerHTML = `
      <div id="nev_logo" class="logo-desk"><img title="logo" src="./logo_kh.webp"></div>
		<div id="nav_links">
			<h4 class="respo-desk-links">Commercial</h4>
			<h4 class="respo-desk-links">Residential</h4>
			<h4 class="respo-desk-links">Agriculture</h4>
			<span onclick="openNav()" class="respo-mob-icon">
				<svg xmlns="http://www.w3.org/2000/svg" height="24" fill="#000" viewBox="0 -960 960 960" width="24"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
			</span>
			<!-- mobile side nav -->
			<div id="mySidenav" class="sidenav">
			  <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
			  <a href="#">Commercial</a>
			  <a href="#">Residential</a>
			  <a href="#">Agriculture</a>
			  <a href="#">About</a>
			  <a href="#">Contact</a>
			</div>

		</div>
		<!--  -->

		<!-- search button -->
		
		<div id="nev_logo" class="logo-mobile"><img title="logo" src="./logo_kh.webp"></div>
		
		<div id="search-button">
			<svg onclick="openSearch()" xmlns="http://www.w3.org/2000/svg" height="24" fill="#000" viewBox="0 -960 960 960" width="24"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>

			
		</div>


		<!-- log in and register buttens  -->
		<!--<div id="nav_btns">
			<button id="nav_login_btn" onclick="openLoginForm()">Log In</button>
		</div>	
		  -->

<!-- nav-login-user-dropdown-->
		 <div id="nav-login-user">
			<div class="dropdown">
			  <button class="dropbtn">
			  	
			  	<div id="nav-user-img">
			  		<img src="./user.JPG">
			  	</div> Digvijay &#8595; </button>
			  <div class="dropdown-content">
			    <a href="./Deshbord-profile.html">Edit profile</a>
			    <a href="./dashbord-addprop.html">Add Property</a>
			    <a href="#">Payments</a>
			    <a href="./deshbord-changepassword.html">Change Password</a>
			    <a href="./index.html">Log Out</a>
			  </div>
			</div>
		</div> <!-- -->
		<div id="search-slide">
			<svg xmlns="http://www.w3.org/2000/svg" onclick="closeSearch()" height="24" fill="#000" viewBox="0 -960 960 960" width="24"><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"/></svg>

			  <div class="searchBar">
					<input id="searchQueryInput" type="text" name="searchQueryInput" placeholder="Search" value="" />
					<button id="searchQuerySubmit" type="submit" name="searchQuerySubmit">
					  <svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="#666666" d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
					  </svg>
					</button>
				  </div>
		</div>
      
      
      `;
    }
  });


 // Use the DOMContentLoaded event to ensure the DOM is fully loaded
 document.addEventListener('DOMContentLoaded', function() {
    // Insert HTML into the div with the ID 'targetDiv'
    var targetDiv = document.getElementById('log_from_window');
    if (targetDiv) {
      targetDiv.innerHTML = `
	  
	  <form class="login">
	  <span id="login-close-btn" onclick="closeLoginForm()">&times;</span>
	  <div id="login-from-logo"><img title="logo" src="./logo_kh.webp"></div>
		<h2>Welcome back!</h2>
		<input type="text" placeholder="User Name" />
		<input type="password" placeholder="Password" />
		<a id="log" href="./dashboard.html" type="submit" value="Log In" >Log in</a>
		<div class="links">
		  <a href="./dashboard.html">Forgot password</a>
		  <a href="./registration.html">Register</a>
		</div>
	  </form>
	 
	  `;
    }
  });


  // Use the DOMContentLoaded event to ensure the DOM is fully loaded
  document.addEventListener('DOMContentLoaded', function() {
    // Insert HTML into the div with the ID 'targetDiv'
    var targetDiv = document.getElementById('footer');
    if (targetDiv) {
      targetDiv.innerHTML = `
	  
	  <img title="logo" width="70px" src="./logo_kh.webp">
	<div>
		<svg fill="#197dff" height="30px" width="30px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
			viewBox="0 0 310 310" xml:space="preserve">
		<g id="XMLID_834_">
			<path id="XMLID_835_" d="M81.703,165.106h33.981V305c0,2.762,2.238,5,5,5h57.616c2.762,0,5-2.238,5-5V165.765h39.064
				c2.54,0,4.677-1.906,4.967-4.429l5.933-51.502c0.163-1.417-0.286-2.836-1.234-3.899c-0.949-1.064-2.307-1.673-3.732-1.673h-44.996
				V71.978c0-9.732,5.24-14.667,15.576-14.667c1.473,0,29.42,0,29.42,0c2.762,0,5-2.239,5-5V5.037c0-2.762-2.238-5-5-5h-40.545
				C187.467,0.023,186.832,0,185.896,0c-7.035,0-31.488,1.381-50.804,19.151c-21.402,19.692-18.427,43.27-17.716,47.358v37.752H81.703
				c-2.762,0-5,2.238-5,5v50.844C76.703,162.867,78.941,165.106,81.703,165.106z"/>
		</g>
		</svg>

		<svg fill="#197dff" height="30px" width="30px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
			viewBox="0 0 75.294 75.294" xml:space="preserve">
		<g>
			<path d="M66.097,12.089h-56.9C4.126,12.089,0,16.215,0,21.286v32.722c0,5.071,4.126,9.197,9.197,9.197h56.9
				c5.071,0,9.197-4.126,9.197-9.197V21.287C75.295,16.215,71.169,12.089,66.097,12.089z M61.603,18.089L37.647,33.523L13.691,18.089
				H61.603z M66.097,57.206h-56.9C7.434,57.206,6,55.771,6,54.009V21.457l29.796,19.16c0.04,0.025,0.083,0.042,0.124,0.065
				c0.043,0.024,0.087,0.047,0.131,0.069c0.231,0.119,0.469,0.215,0.712,0.278c0.025,0.007,0.05,0.01,0.075,0.016
				c0.267,0.063,0.537,0.102,0.807,0.102c0.001,0,0.002,0,0.002,0c0.002,0,0.003,0,0.004,0c0.27,0,0.54-0.038,0.807-0.102
				c0.025-0.006,0.05-0.009,0.075-0.016c0.243-0.063,0.48-0.159,0.712-0.278c0.044-0.022,0.088-0.045,0.131-0.069
				c0.041-0.023,0.084-0.04,0.124-0.065l29.796-19.16v32.551C69.295,55.771,67.86,57.206,66.097,57.206z"/>
		</g>
		</svg>

		<svg fill="#197dff" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
			width="30px" height="30px" viewBox="0 0 169.063 169.063"
			xml:space="preserve">
		<g>
			<path d="M122.406,0H46.654C20.929,0,0,20.93,0,46.655v75.752c0,25.726,20.929,46.655,46.654,46.655h75.752
				c25.727,0,46.656-20.93,46.656-46.655V46.655C169.063,20.93,148.133,0,122.406,0z M154.063,122.407
				c0,17.455-14.201,31.655-31.656,31.655H46.654C29.2,154.063,15,139.862,15,122.407V46.655C15,29.201,29.2,15,46.654,15h75.752
				c17.455,0,31.656,14.201,31.656,31.655V122.407z"/>
			<path d="M84.531,40.97c-24.021,0-43.563,19.542-43.563,43.563c0,24.02,19.542,43.561,43.563,43.561s43.563-19.541,43.563-43.561
				C128.094,60.512,108.552,40.97,84.531,40.97z M84.531,113.093c-15.749,0-28.563-12.812-28.563-28.561
				c0-15.75,12.813-28.563,28.563-28.563s28.563,12.813,28.563,28.563C113.094,100.281,100.28,113.093,84.531,113.093z"/>
			<path d="M129.921,28.251c-2.89,0-5.729,1.17-7.77,3.22c-2.051,2.04-3.23,4.88-3.23,7.78c0,2.891,1.18,5.73,3.23,7.78
				c2.04,2.04,4.88,3.22,7.77,3.22c2.9,0,5.73-1.18,7.78-3.22c2.05-2.05,3.22-4.89,3.22-7.78c0-2.9-1.17-5.74-3.22-7.78
				C135.661,29.421,132.821,28.251,129.921,28.251z"/>
		</g>
		</svg>
	</div>
	 
	 
	 
	 
	 
	  `;
    }
  });