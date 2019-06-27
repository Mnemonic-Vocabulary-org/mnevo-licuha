export default function(Api){
	return {
		list: 
		{
			get: function(prms){return Api().get('api/list', prms)},
			del: function(prms){return Api().post('api/list', prms)}
		},
		item: 
		{
			add: function(prms){return Api().post('api/list', prms)},
			get: function(prms){return Api().get('api/list', prms)},
			upd: function(prms){return Api().put('api/list', prms)},
			del: function(prms){return Api().delete('api/list', prms)}
		}
	}
}
/*
Rodion Shylo, [24.06.19 15:01]

GET           list
POST          deleteList(
GET           get(id: String)
PUT           update(id: String)
POST          create
DELETE        delete(id: String)



*/