<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class DashboardController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        $total_balance = DB::table('transactions')->sum('amount');

        return response()->json([
            'total_balance' => number_format(($total_balance / 100), 2, '.', ''),
            'import_status' => jobIsQueued() ? true : false
        ], 200);
    }
}
