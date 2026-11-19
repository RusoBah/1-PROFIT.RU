<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AboutController extends Controller
{
    public function index(){
        return response()->json([
            'project' => '1-PROFIT.RU',
            'description' => 'Мы автоматизируем бизнес-процессы, интегрируем 1С с сайтами, сервисами и оборудованием, оптимизируем данные и минимизируем ручной труд. Вы получаете ускорение работы, меньше ошибок и полную синхронизацию данных между системами. ',
            'status' => 'active',
        ]);
    }
}
