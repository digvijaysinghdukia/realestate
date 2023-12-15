// Use the DOMContentLoaded event to ensure the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Insert HTML into the div with the ID 'targetDiv'
    var targetDiv = document.getElementById('navBar');
    if (targetDiv) {
      targetDiv.innerHTML = `
	  <!-- html insert using js -->
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
	  <div id="mobile-bell-icon" onclick="toggleHighlight()">
		  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M80-560q0-100 44.5-183.5T244-882l47 64q-60 44-95.5 111T160-560H80Zm720 0q0-80-35.5-147T669-818l47-64q75 55 119.5 138.5T880-560h-80ZM160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160Zm320-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z"/></svg>
	  </div>
	  <!--  -->

	  <!-- search button -->
	  
	  <div id="nev_logo" class="logo-mobile"><img title="logo" src="./logo_kh.webp"></div>

	  <div id="search-button">
		  <svg onclick="openSearch()" xmlns="http://www.w3.org/2000/svg" height="24" fill="#000" viewBox="0 -960 960 960" width="24"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
	  </div>

	  <div id="desktop-bell-icon" onclick="toggleHighlight()">
		  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M80-560q0-100 44.5-183.5T244-882l47 64q-60 44-95.5 111T160-560H80Zm720 0q0-80-35.5-147T669-818l47-64q75 55 119.5 138.5T880-560h-80ZM160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160Zm320-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z"/></svg>
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


	  <div id="notification-slider">
		  <div class="notification" style="grid-template-rows: auto;">
				  <h5 style="font-size: large; color: black;">Notification</h5>
		  </div>
		  <div class="notification">
			  <div class="notification-head">
				  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-80q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80Zm0-420ZM160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v13q-11 22-16 45t-4 47q-10-2-19.5-3.5T480-720q-66 0-113 47t-47 113v280h320v-257q18 8 38.5 12.5T720-520v240h80v80H160Zm560-400q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Z"/></svg>
				  <h5 style="font-size: medium;">Android System</h5>
				  <span style="font-size: smaller;">2 hours ago</span>
			  </div>
			  <div class="notification-body">
				  <h5 style="font-size: large;">Tethering or hostspot active</h5>
				  <p style="font-size: medium;">3.3 MB of data have been shared through Wi-Fi (1 connecation)</p>
			  </div>
		  </div>

		  <div class="notification">
			  <div class="notification-head">
				  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-80q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80Zm0-420ZM160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v13q-11 22-16 45t-4 47q-10-2-19.5-3.5T480-720q-66 0-113 47t-47 113v280h320v-257q18 8 38.5 12.5T720-520v240h80v80H160Zm560-400q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Z"/></svg>
				  <h5 style="font-size: medium;">Download manager</h5>
				  <span style="font-size: smaller;">1 hours ago</span>
			  </div>
			  <div class="notification-body">
				  <h5 style="font-size: large;">Class_XII_datesheet_2024.pdf</h5>
				  <p style="font-size: medium;">Download completed</p>
			  </div>
		  </div>

		  <div id="colseBtn" onclick="toggleHighlight()">
			  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
		  </div>
	  </div>
      
      
      `;
    }
  });


  function toggleHighlight() {
	var close = document.getElementById('notification-slider');
	close.style.top = close.style.top === '0px' ? '-150vh' : '0px';
}






  document.addEventListener('DOMContentLoaded', function() {
    // Insert HTML into the div with the ID 'targetDiv'
    var targetDiv = document.getElementById('dnavBar');
    if (targetDiv) {
		targetDiv.innerHTML = `
		<!-- html insert using js -->
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
		<div id="mobile-bell-icon" onclick="toggleHighlight()">
			<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M80-560q0-100 44.5-183.5T244-882l47 64q-60 44-95.5 111T160-560H80Zm720 0q0-80-35.5-147T669-818l47-64q75 55 119.5 138.5T880-560h-80ZM160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160Zm320-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z"/></svg>
		</div>
		<!--  -->
  
		<!-- search button -->
		
		<div id="nev_logo" class="logo-mobile"><img title="logo" src="./logo_kh.webp"></div>
  
		<div id="search-button">
			<svg onclick="openSearch()" xmlns="http://www.w3.org/2000/svg" height="24" fill="#000" viewBox="0 -960 960 960" width="24"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
		</div>
  
		<div id="desktop-bell-icon" onclick="toggleHighlight()">
			<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M80-560q0-100 44.5-183.5T244-882l47 64q-60 44-95.5 111T160-560H80Zm720 0q0-80-35.5-147T669-818l47-64q75 55 119.5 138.5T880-560h-80ZM160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160Zm320-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z"/></svg>
		</div>
  
		<!-- log in and register buttens  -->
		<!--<div id="nav_btns">
			<button id="nav_login_btn" onclick="openLoginForm()">Log In</button>
		</div>	
		  -->
  
  <!-- nav-login-user-dropdown-->
		<!-- --> <div id="nav-login-user">
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
		</div> 
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
  
  
		<div id="notification-slider">
			<div class="notification" style="grid-template-rows: auto;">
					<h5 style="font-size: large; color: black;">Notification</h5>
			</div>
			<div class="notification">
				<div class="notification-head">
					<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-80q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80Zm0-420ZM160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v13q-11 22-16 45t-4 47q-10-2-19.5-3.5T480-720q-66 0-113 47t-47 113v280h320v-257q18 8 38.5 12.5T720-520v240h80v80H160Zm560-400q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Z"/></svg>
					<h5 style="font-size: medium;">Android System</h5>
					<span style="font-size: smaller;">2 hours ago</span>
				</div>
				<div class="notification-body">
					<h5 style="font-size: large;">Tethering or hostspot active</h5>
					<p style="font-size: medium;">3.3 MB of data have been shared through Wi-Fi (1 connecation)</p>
				</div>
			</div>
  
			<div class="notification">
				<div class="notification-head">
					<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-80q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80Zm0-420ZM160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v13q-11 22-16 45t-4 47q-10-2-19.5-3.5T480-720q-66 0-113 47t-47 113v280h320v-257q18 8 38.5 12.5T720-520v240h80v80H160Zm560-400q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Z"/></svg>
					<h5 style="font-size: medium;">Download manager</h5>
					<span style="font-size: smaller;">1 hours ago</span>
				</div>
				<div class="notification-body">
					<h5 style="font-size: large;">Class_XII_datesheet_2024.pdf</h5>
					<p style="font-size: medium;">Download completed</p>
				</div>
			</div>
  
			<div id="colseBtn" onclick="toggleHighlight()">
				<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
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
	  
	  <div id="f-head">
	  <img width="40px" height="40px" src="./logo_kh.webp" />
	  <svg xmlns="http://www.w3.org/2000/svg" height="24" fill="#888" viewBox="0 -960 960 960" width="24"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg>
	  <span style="color: #888;">hey! your think..</span>
  </div>
  <div id="links-area">
	  <div id="link">
		  <h4>Property Type</h4>
		  <a href="#">Commercial</a>
		  <a href="#">Residential</a>
		  <a href="#">Agriculture</a>
		  <h4>You See On</h4>
		  <a href="./show.html">Houses</a>
		  <a href="./show.html">Apartments</a>
		  <a href="./show.html">Villa</a>
		  <a href="./show.html">Plot</a>
	  </div>
	  <div id="link">
		  <h4>Location</h4>
		  <a href="./show.html">Jaipur</a>
		  <a href="./show.html">Sikar</a>
		  <a href="./show.html">Other</a>
		  <h4>Dashboard Direct Links</h4>
		  <a href="./Deshbord-profile.html">Profile</a>
		  <a href="./dashbord-myprop.html">My Propertys</a>
		  <a href="./dashbord-addprop.html">Add Prpperty</a>
		  <a href="./dashbord-myfav.html">Favorite Prpperty</a>
		  <a href="./deshbord-invoice.html">Invoices</a>
		  <a href="./deshbord-changepassword.html">Change Password</a>
		  
	  </div>
	  <div id="link">
		  <h4>Account</h4>
		  <a href="./show.html">Register</a>
		  <a href="./show.html">Log In</a>
		  <a href="./show.html">Forgot password</a>
		  <h4>Help & Support</h4>
		  <a href="./helpcenter.html">Send A Message</a>
		  <a href="./helpcenter.html">Email</a>
		  <a href="./helpcenter.html">Address</a>
		  <a href="./helpcenter.html">Map</a>
	  </div>
  </div>
  <div id="f-down">
	  <span>Copyright © 2023 Hey Inc. All rights reserved.</span>
	  <span>Privacy Policy   Terms of Use  Legal</span>
	  <span>India</span>
  </div>
	 
	 
	 
	  `;
    }
  });
