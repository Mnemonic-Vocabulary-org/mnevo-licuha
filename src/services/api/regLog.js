export default function(Api){
	return {
		send: function (user) {return Api().post('user', user)},
		login: function (data) {return Api().post('api/login', data)},
		register: function (data) {return Api().post('api/register', data)}
	}
}
