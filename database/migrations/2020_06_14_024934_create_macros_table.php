<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMacrosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('macros_recebidas', function (Blueprint $table) {
            $table->id('id')->comment('id macro recebida');
            $table->string('nome_macro', 100)->comment('nome da macro');
            $table->string('macro', 100)->comment('nome para identificar a macro');
            $table->string('funcao_macro', 100)->comment('funcao da macro');
            $table->integer('id_employee')->comment('id do funcionario');
            $table->time('hora_definida', 0)->comment('hora em que a macro foi criada (H:i:s)');
            $table->dateTime('hora_insercao', 0)->comment('data e hora da insercao da macro');
            $table->string('latitude', 200)->comment('gps latitude');
            $table->string('longitude', 200)->comment('gps longitude');
            $table->date('data_macro')->comment('data em que a macro foi criada (Y-m-d)');
            $table->string('justificativa', 100)->comment('justificativa curta da macro');
            $table->text('texto_justificativa')->comment('justificativa longa da macro');
            $table->string('editado')->comment('status indicando se a macro foi editada ou não (true/false)');
            $table->uuid('uuid')->comment('uuid do aparelho responsavel pelo envio da macro');
            $table->string('so_version', 100)->comment('so version do aparelho responsavel pelo envio da macro');
            $table->string('model_version', 100)->comment('model version do aparelho responsavel pelo envio da macro');
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
        Schema::dropIfExists('macros_recebidas');
    }
}
