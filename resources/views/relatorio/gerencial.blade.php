@extends('templates.main')

@section('content')
    <div class="container">
        <h3>Relatório gerencial</h3>
        <button type="button" name="" id="" class="btn btn-success">
            <i class="fas fa-filter d-inline"></i>
            <p class="m-0 d-inline">Filtro</p>
        </button>
        <button type="button" name="" id="" class="btn btn-success">
            <i class="fas fa-plus d-inline"></i>
            <p class="m-0 d-inline">Inserir macro</p>
        </button>
        <button type="button" name="" id="" class="btn btn-success">
            <i class="fas fa-share-square d-inline"></i>
            <p class="m-0 d-inline">Exportar</p>
        </button>
        <div class="d-flex justify-content-center container-relatorio mt-10 rounded">
            <div class="w-100 d-flex container justify-content-center align-items-center" style="height: 300px; background-color: rgba(0,0,255,.1)">
                <div>
                    <i class="fas fa-info-circle d-inline text-secondary"></i>
                    <p class="m-0 d-inline text-secondary">Sem dados para mostrar</p>
                </div>
            </div>
        </div>
    </div>
@endsection