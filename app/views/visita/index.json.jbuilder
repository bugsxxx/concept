json.array!(@visita) do |visitum|
  json.extract! visitum, :id, :nome, :tlm, :email, :assunto, :descricao
  json.url visitum_url(visitum, format: :json)
end
