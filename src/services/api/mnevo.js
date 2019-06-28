export default function(Api){
	return {
		list: 
		{
			get: async function(prms){return await Api().get('api/list', prms)},
			del: async function(prms){return await Api().post('api/list', prms)}
		},
		item: 
		{
			add: async function(prms){return await Api().post('api/list', prms)},
			get: async function(prms){return await Api().get('api/list', prms)},
			upd: async function(prms){return await Api().put('api/list', prms)},
			del: async function(prms){return await Api().delete('api/list', prms)}
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