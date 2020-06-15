<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class EmployeeTest extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('employees')->insert([
            'id_empresa' => 1,
            'nome' => 'employee teste',
            'email' => 'employee@teste.com.br',
            'cnh' => '15894198151',
            'cpf' => '0254778490',
            'rg' => 'mtes-25195',
            'data_nascimento' => date('Y-m-d'),
            'expedicao_rg' => 'complemento teste',
            'uf_rg' => 'cidade teste',
            'data_emissao_rg' => date('Y-m-d'),
            'pis' => '548984956544',
            'uf' => 'SP',
            'cidade' => 'Boa vista',
            'endereco' => 'endereço teste',
            'numero' => '325',
            'cep' => '54898498',
            'complemento' => '',
            'bairro' => 'bairro teste',
            'funcao' => 'motorista',
            'nome_mae' => 'nome mae teste',
            'nome_pai' => 'nome pai teste',
            'cidade_nascimento' => 'cidade natal teste',
            'telefone' => '9548415165',
            'celular' => '9548415165',
            'outros_contatos' => '{}',
            'observacao' => 'obs teste',
            'formacoes' => '',
            'foto_perfil' => '',
            'token_login' => md5('token'),
            'senha' => md5('password'),
        ]);
    }
}
