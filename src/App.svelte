<script>

	import Icon from './Icon.svelte';

	const contactIcons = {
		linkedin: {
			icon: '/svg-icons/linkedin.svg', src: 'https://www.linkedin.com/in/sim15'
		}	
	}
</script>


<style>
	main {
		margin: 0;
		padding: 0;
		height: 100vh;
		width: 100%;
		background: linear-gradient(180deg, #34252F 0%, #110c0f 134.77%);
	}

	a {
		text-decoration: none;
	}

	
	h1 {
		/* animation: floatUp 1s ease-in; */
		font-size: 6em;
		font-weight: 700;
		margin: 0;
	}

	h2 {
		margin: .4em 0;
	}

	h2 span {
		font-size: 1.5em;
		font-weight: 400;
		color: #AAAE8E;
	}

	a:hover {
		text-decoration: underline;
		cursor: pointer;
	}

	.container {
		position: absolute;
		top: 50%;
		transform: translate(0,-50%);
		margin: 0 13em;
	}

	.about-container {
		font-size: 2em;
		animation: floatUp .5s ease-out;
		/* line-height: em; */
	}

	.about-container p span {
		color: #446E7D;
		font-weight: 700;
	}

	p {
		margin: 0;
	}

	.contact-icons {
		animation: floatUp .5s ease-out;
		height: 5em;
		margin: 4em 0;
	}

	.icon-img {
		display: inline-block;
		/* height: 100%; */
		position: relative;
		margin-right: 3em;
		bottom: 0;
		transition: bottom .4s ease;
	}

	.icon-img:hover {
		/* transform: translateY(-25%); */
		bottom: 3.5%;
		animation: float 2s ease-in-out infinite;
		/* transform: translateY(0); */

	}

	a {
    	color: inherit;
	}

	@keyframes floatUp {
		0% {
			transform: translateY(20%);
			opacity: 0.2;
		}
		100% {
			transform: translateY(0);
			opacity: 1;
		}
	}

	@keyframes float {
		0% {
			transform: translatey(0px);
		}
		50% {
			transform: translatey(-4%);
		}
		100% {
			transform: translatey(0px);
		}
	}

	@media (max-width: 800px) {
		.container {
			position: absolute;
			top: 50%;
			transform: translate(0,-50%);
			margin: 0 4em;
			/* font-size: .5em; */
		}

		h1 {
			font-size: 3.5em;
		}

		h2 {
			font-size: 1em;
		}

		p {
			font-size: em;
		}

		.contact-icons {
			margin: 2em 0;
		}
		/* height=${height} */

	}
</style>


<main>
	<div class="container">
		<h1>Simon Beyzerov</h1>
		<h2><span>svbeyzerov [at] wpi.edu</span></h2>

		<div class="contact-icons">
			<div  class="icon-img"><a target="_blank" href="https://www.linkedin.com/in/sim15"><Icon name="linkedin" aclass="icon-svg" /></a></div>
			<div  class="icon-img"><a target="_blank" href="https://github.com/sim15/"><Icon name="github" aclass="icon-svg" /></a></div>
			<div  class="icon-img"><a target="_blank" href="https://twitter.com/simonbeyzerov"><Icon name="twitter" aclass="icon-svg" /></a></div>
		</div>

		<div class="about-container">
			<p>
				I'm currently a student at the <span><a target="_blank" href="https://www.massacademy.org/" >Massachusetts Academy of Math & Science at Worcester Polytechnic Institute</a></span>. 
				<br> <br>
				My interests lie within computer science and mathematics, primarily within research in theoretical computer science and cryptography.
				<br> <br>
				Feel free to reach out or check out some of my recent work!
			</p>
		</div>
	</div>
</main>
