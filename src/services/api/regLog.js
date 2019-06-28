export default function(Api){
	return {
		snd: async function (user) {return await Api.post('user', user)},
		log: async function (data) {return await Api.post('api/login', data)},
		reg: async function (data) {return await Api.post('api/register', data)}
	}
}
