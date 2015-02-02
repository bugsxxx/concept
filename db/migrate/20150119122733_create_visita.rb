class CreateVisita < ActiveRecord::Migration
  def change
    create_table :visita do |t|
      t.string :nome
      t.string :tlm
      t.string :email
      t.string :assunto
      t.text :descricao

      t.timestamps
    end
  end
end
