<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEmpresasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('empresas', function (Blueprint $table) {
            $table->id('id')->comment('id empresa');
            $table->string('cnpj', 20)->unique()->nullable(false)->comment('cnpj da empresa / sem pontuacao');
            $table->string('razao_social', 255)->unique()->nullable(false)->comment('razao social da empresa');
            $table->string('nome_fantasia', 255)->unique()->nullable(false)->comment('nome fantasia da empresa');
            $table->string('cep', 100)->comment('cep da empresa / sem pontuacao');
            $table->string('endereco', 255)->comment('endereco da empresa');
            $table->string('numero', 10)->comment('numero do endereco da empresa');
            $table->string('bairro', 255)->comment('bairro da empresa');
            $table->string('complemento', 255)->comment('complemento do endereco da empresa');
            $table->string('cidade', 255)->comment('cidade da empresa');
            $table->string('telefone', 255)->unique()->nullable(false)->comment('telefone comercial da empresa / sem pontuacao');
            $table->string('email', 255)->unique()->nullable(false)->comment('email comercial da empresa');
            $table->text('logo')->nullable(true)->comment('logo da empresa');
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
        Schema::dropIfExists('empresas');
    }
}
