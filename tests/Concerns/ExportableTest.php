<?php

namespace Nikazooz\Simplesheet\Tests\Concerns;

use Illuminate\Contracts\Support\Responsable;
use Illuminate\Http\Request;
use Nikazooz\Simplesheet\Concerns\Exportable;
use Nikazooz\Simplesheet\Exceptions\NoFilePathGivenException;
use Nikazooz\Simplesheet\Simplesheet;
use Nikazooz\Simplesheet\Tests\TestCase;
use Symfony\Component\HttpFoundation\BinaryFileResponse;

class ExportableTest extends TestCase
{
    /**
     * @test
     */
    public function needs_to_have_a_file_name_when_downloading()
    {
        $this->expectException(\Nikazooz\Simplesheet\Exceptions\NoFilenameGivenException::class);
        $this->expectExceptionMessage('A filename needs to be passed in order to download the export');

        $export = new class {
            use Exportable;
        };

        $export->download();
    }

    /**
     * @test
     */
    public function needs_to_have_a_file_name_when_storing()
    {
        $export = new class {
            use Exportable;
        };

        $this->expectException(NoFilePathGivenException::class);
        $this->expectExceptionMessage('A filepath needs to be passed in order to store the export');

        $export->store();
    }

    /**
     * @test
     */
    public function needs_to_have_a_file_name_when_queuing()
    {
        $this->expectException(\Nikazooz\Simplesheet\Exceptions\NoFilePathGivenException::class);
        $this->expectExceptionMessage('A filepath needs to be passed in order to store the export');

        $export = new class {
            use Exportable;
        };

        $export->queue();
    }

    /**
     * @test
     */
    public function responsable_needs_to_have_file_name_configured_inside_the_export()
    {
        $this->expectException(\Nikazooz\Simplesheet\Exceptions\NoFilenameGivenException::class);
        $this->expectExceptionMessage('A filename needs to be passed in order to download the export');

        $export = new class implements Responsable {
            use Exportable;
        };

        $export->toResponse(new Request());
    }

    /**
     * @test
     */
    public function is_responsable()
    {
        $export = new class implements Responsable {
            use Exportable;

            protected $fileName = 'export.xlsx';
        };

        $this->assertInstanceOf(Responsable::class, $export);

        $response = $export->toResponse(new Request());

        $this->assertInstanceOf(BinaryFileResponse::class, $response);
    }

    /**
     * @test
     */
    public function can_have_customized_header()
    {
        $export = new class {
            use Exportable;
        };

        $response = $export->download(
            'name.csv',
            Simplesheet::CSV,
            [
                'Content-Type' => 'text/csv',
            ]
        );

        $this->assertEquals('text/csv', $response->headers->get('Content-Type'));
    }

    /**
     * @test
     */
    public function can_set_custom_headers_in_export_class()
    {
        $export = new class {
            use Exportable;

            protected $fileName = 'name.csv';
            protected $writerType = Simplesheet::CSV;
            protected $headers = [
                'Content-Type' => 'text/csv',
            ];
        };
        $response = $export->toResponse(request());

        $this->assertEquals('text/csv', $response->headers->get('Content-Type'));
    }
}
