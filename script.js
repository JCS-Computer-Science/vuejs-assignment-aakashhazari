var bored_api = 'http://www.boredapi.com/api/activity/ '

async function getBored(){
	var response = await fetch(bored_api);
	console.log(response)
	var data = await response.json();
	console.log(data);
	
	document.getElementById('bore').innerHTML = data.activity;
}
getBored();


const app = Vue.createApp({
	el: '',
	data() {
		return{
			getbored
		}
	},
	mounted () {
		axios
		.get('http://www.boredapi.com/api/activity/ ')
		.then(response => (this.info = response))
	},
})

