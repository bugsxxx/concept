class Visitum < ActiveRecord::Base


	def getByname(query)

		Visitum.where(['nome like ?','%'+query+'%']).order('created_at ASC')
		
	end

	


	end
