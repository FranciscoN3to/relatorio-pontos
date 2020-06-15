<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Query\Expression;
use Illuminate\Support\Facades\Schema;

class CreateEmployeesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('employees', function (Blueprint $table) {
            $table->id('id')->comment('id do employee');
            $table->integer('id_empresa')->nullable(false)->comment('id da empresa relacionada ao employee');
            $table->string('nome', 255)->unique()->nullable(false)->comment('nome do employee');
            $table->string('email', 255)->unique()->nullable(false)->comment('email do employee');
            $table->string('cnh', 20)->unique()->nullable(true)->comment('cnh do employee / sem pontos');
            $table->string('cpf', 20)->unique()->nullable(false)->comment('cpf do employee / sem pontos');
            $table->string('rg', 20)->unique()->nullable(false)->comment('rg do employee / sem pontos');
            $table->date('data_nascimento')->nullable(false)->comment('data de nascimento do employee');
            $table->string('expedicao_rg', 100)->comment('orgão expedidor do rg do employee');
            $table->string('uf_rg', 100)->comment('uf do rg do employee');
            $table->date('data_emissao_rg')->comment('data de emissai do rg do employee');
            $table->string('pis', 100)->comment('codigo pis do employee');
            $table->string('uf', 100)->nullable(false)->comment('uf do employee');
            $table->string('cidade', 200)->nullable(false)->comment('cidade do employee');
            $table->string('endereco', 200)->nullable(false)->comment('endereco do employee');
            $table->string('numero', 10)->comment('numero do endereco do employee');
            $table->string('cep', 100)->comment('cep do employee / sem pontos');
            $table->string('complemento', 100)->comment('complemento do endereco do employee');
            $table->string('bairro', 100)->nullable(false)->comment('bairro do endereco do employee');
            $table->string('funcao', 100)->nullable(false)->comment('funcao do employee na empresa');
            $table->string('nome_mae', 100)->comment('nome da mae do employee');
            $table->string('nome_pai', 100)->comment('nome do pai do employee');
            $table->string('cidade_nascimento', 100)->comment('cidade natal do employee');
            $table->string('telefone', 100)->comment('ddd+telefone do employee / sem pontos');
            $table->string('celular', 100)->comment('ddd+celular do employee / sem pontos');
            $table->json('outros_contatos')->default(new Expression('(JSON_ARRAY())'))->comment('contatos de terceiros');
            $table->text('observacao')->comment('observacoes');
            $table->text('formacoes')->comment('formacoes academicas do employee');
            $table->text('foto_perfil')->comment('endereco da foto do employee');
            $table->string('token_login', 255)->nullable(false)->comment('token para autenticacao login');
            $table->string('senha', 255)->nullable(false)->comment('senha em hash md5');
            $table->timestamps();

            $table->engine = 'InnoDB';
            $table->charset = 'utf8mb4';
            $table->collation = 'utf8mb4_unicode_ci';
   
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('employees');
    }
}
