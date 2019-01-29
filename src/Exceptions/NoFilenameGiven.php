<?php

namespace Nikazooz\Simplesheet\Exceptions;

use Throwable;
use InvalidArgumentException;

class NoFilenameGiven extends InvalidArgumentException implements Throwable
{
    /**
     * @param  string  $message
     * @param  int  $code
     * @param  \Throwable|null  $previous
     */
    public function __construct(
        $message = 'A filename needs to be passed in order to download the export',
        $code = 0,
        Throwable $previous = null
    ) {
        parent::__construct($message, $code, $previous);
    }
}
