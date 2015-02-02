require 'test_helper'

class VisitaControllerTest < ActionController::TestCase
  setup do
    @visitum = visita(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:visita)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create visitum" do
    assert_difference('Visitum.count') do
      post :create, visitum: { assunto: @visitum.assunto, descricao: @visitum.descricao, email: @visitum.email, nome: @visitum.nome, tlm: @visitum.tlm }
    end

    assert_redirected_to visitum_path(assigns(:visitum))
  end

  test "should show visitum" do
    get :show, id: @visitum
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @visitum
    assert_response :success
  end

  test "should update visitum" do
    patch :update, id: @visitum, visitum: { assunto: @visitum.assunto, descricao: @visitum.descricao, email: @visitum.email, nome: @visitum.nome, tlm: @visitum.tlm }
    assert_redirected_to visitum_path(assigns(:visitum))
  end

  test "should destroy visitum" do
    assert_difference('Visitum.count', -1) do
      delete :destroy, id: @visitum
    end

    assert_redirected_to visita_path
  end
end
