# schedule

.. image:: https://api.travis-ci.org/dbader/schedule.svg?branch=master :target: https://travis-ci.org/dbader/schedule

.. image:: https://coveralls.io/repos/dbader/schedule/badge.svg?branch=master :target: https://coveralls.io/r/dbader/schedule

.. image:: https://img.shields.io/pypi/v/schedule.svg :target: https://pypi.python.org/pypi/schedule

Python job scheduling for humans.

An in-process scheduler for periodic jobs that uses the builder pattern for configuration. Schedule lets you run Python functions (or any other callable) periodically at pre-determined intervals using a simple, human-friendly syntax.

Inspired by `Adam Wiggins' <https://github.com/adamwiggins>`_ article `"Rethinking Cron" <https://adam.herokuapp.com/past/ @abstr_number / @abstr_number / @abstr_number /rethinking_cron/>`_ and the `clockwork <https://github.com/Rykian/clockwork>`_ Ruby module.

## Features

  * A simple to use API for scheduling jobs.
  * Very lightweight and no external dependencies.
  * Excellent test coverage.
  * Tested on Python @abstr_number . @abstr_number , @abstr_number . @abstr_number , and @abstr_number . @abstr_number 



## Usage

.. code-block:: bash
    
    
    $ pip install schedule
    

.. code-block:: python
    
    
    import schedule
    import time
    
    def job():
        print("I'm working...")
    
    schedule.every( @abstr_number ).minutes.do(job)
    schedule.every().hour.do(job)
    schedule.every().day.at(" @abstr_number : @abstr_number ").do(job)
    schedule.every( @abstr_number ).to( @abstr_number ).minutes.do(job)
    schedule.every().monday.do(job)
    schedule.every().wednesday.at(" @abstr_number : @abstr_number ").do(job)
    schedule.every().minute.at(": @abstr_number ").do(job)
    
    while True:
        schedule.run_pending()
        time.sleep( @abstr_number )
    

## Documentation

Schedule's documentation lives at `schedule.readthedocs.io <https://schedule.readthedocs.io/>`_.

Please also check the FAQ there with common questions.

## Meta

Daniel Bader - `@dbader_org <https://twitter.com/dbader_org>`_ - mail@dbader.org

Distributed under the MIT license. See `LICENSE.txt <https://github.com/dbader/schedule/blob/master/LICENSE.txt>`_ for more information.

https://github.com/dbader/schedule