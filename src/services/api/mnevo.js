export default function(Api){
	return {
		list: 
		{
			get: async function(prms){return await Api().get('api/list', prms)},
			del: async function(prms){return await Api().post('api/list', prms)}
		},
		item: 
		{
			add: async function(prms){return await Api().post('api/item', prms)},
			get: async function(prms){return await Api().get('api/item', prms)},
			upd: async function(prms){return await Api().put('api/item', prms)},
			del: async function(prms){return await Api().delete('api/item', prms)}
		}
	}
}
/*
Rodion Shylo, [29.06.19 22:15]

GET           /hui?limit=20&                    list
GET           /hui/id=123                       get(id: String)
PUT           /hui/id=123                       update(id: String)
POST          /hui                              create
POST          /hui/delete(List<ObjectId>)       deleteList()
DELETE        /hui/id=123                       delete(id: String)
*/