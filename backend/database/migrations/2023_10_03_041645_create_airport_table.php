<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('airport', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('iata')->nullable();
            $table->string('airport_name');
            $table->string('city_name');
            $table->string('country_name');
            $table->decimal('x', 8, 4);
            $table->decimal('y', 8, 4);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('airport');
    }
};
