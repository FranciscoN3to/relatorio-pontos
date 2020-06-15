<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class EmpresaTeste extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('empresas')->insert([
            'cnpj' => Str::random(14),
            'razao_social' => 'Apimov',
            'nome_fantasia' => 'Apimov teste',
            'cep' => Str::random(7),
            'endereco' => 'rua teste',
            'numero' => Str::random(3),
            'bairro' => 'bairro teste',
            'complemento' => 'complemento teste',
            'cidade' => 'cidade teste',
            'telefone' => Str::random(10),
            'email' => Str::random(6).'@apimov.com.br',
        ]);
    }
}
