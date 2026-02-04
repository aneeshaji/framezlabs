<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ApiTest extends TestCase
{
    use RefreshDatabase;

    public function test_subscribe()
    {
        $this->withoutExceptionHandling();
        $response = $this->postJson('/api/subscribe', [
            'email' => 'test_feature@example.com',
        ]);

        $response->assertStatus(200);
        $this->assertDatabaseHas('subscribers', ['email' => 'test_feature@example.com']);
    }

    public function test_enquiry()
    {
        $response = $this->postJson('/api/enquiry', [
            'name' => 'Test',
            'phone' => '123',
            'message' => 'Msg',
            'category' => 'General'
        ]);

        $response->assertStatus(200);
        $this->assertDatabaseHas('enquiries', ['name' => 'Test']);
    }
}
