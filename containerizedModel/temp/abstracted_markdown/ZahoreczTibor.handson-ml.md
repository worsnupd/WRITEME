# Machine Learning Notebooks

This project aims at teaching you the fundamentals of Machine Learning in python. It contains the example code and solutions to the exercises in my O'Reilly book @abstr_hyperlink :

@abstr_hyperlink 

Simply open the @abstr_hyperlink notebooks you are interested in:

  * Using @abstr_hyperlink 
    * note: @abstr_hyperlink also works but it is slower and the math formulas are not displayed correctly,
  * or by cloning this repository and running Jupyter locally. This option lets you play around with the code. In this case, follow the installation instructions below.



# Installation

First, you will need to install @abstr_hyperlink , if you don't have it already.

Next, clone this repository by opening a terminal and typing the following commands:
    
    
    $ cd $HOME  # or any other development directory you prefer
    $ git clone https://github.com/ageron/handson-ml.git
    $ cd handson-ml
    

If you want to go through chapter @abstr_number on Reinforcement Learning, you will need to @abstr_hyperlink and its dependencies for Atari simulations.

If you are familiar with Python and you know how to install Python libraries, go ahead and install the libraries listed in `requirements.txt` and jump to the Starting Jupyter section. If you need detailed instructions, please read on.

## Python & Required Libraries

Of course, you obviously need Python. Python @abstr_number is already preinstalled on most systems nowadays, and sometimes even Python @abstr_number . You can check which version(s) you have by typing the following commands:
    
    
    $ python --version   # for Python  @abstr_number 
    $ python @abstr_number  --version  # for Python  @abstr_number
    

Any Python @abstr_number version should be fine, preferably ≥ @abstr_number . @abstr_number . If you don't have Python @abstr_number , I recommend installing it (Python ≥ @abstr_number . @abstr_number should work, but it is deprecated so Python @abstr_number is preferable). To do so, you have several options: on Windows or MacOSX, you can just download it from @abstr_hyperlink . On MacOSX, you can alternatively use @abstr_hyperlink or @abstr_hyperlink . On Linux, unless you know what you are doing, you should use your system's packaging system. For example, on Debian or Ubuntu, type:
    
    
    $ sudo apt-get update
    $ sudo apt-get install python @abstr_number
    

Another option is to download and install @abstr_hyperlink . This is a package that includes both Python and many scientific libraries. You should prefer the Python @abstr_number version.

If you choose to use Anaconda, read the next section, or else jump to the Using pip section.

## Using Anaconda

When using Anaconda, you can optionally create an isolated Python environment dedicated to this project. This is recommended as it makes it possible to have a different environment for each project (e.g. one for this project), with potentially different libraries and library versions:
    
    
    $ conda create -n mlbook python= @abstr_number . @abstr_number  anaconda
    $ source activate mlbook
    

This creates a fresh Python @abstr_number . @abstr_number environment called `mlbook` (you can change the name if you want to), and it activates it. This environment contains all the scientific libraries that come with Anaconda. This includes all the libraries we will need (NumPy, Matplotlib, Pandas, Jupyter and a few others), except for TensorFlow, so let's install it:
    
    
    $ conda install -n mlbook -c conda-forge tensorflow= @abstr_number . @abstr_number . @abstr_number
    

This installs TensorFlow @abstr_number . @abstr_number . @abstr_number in the `mlbook` environment (fetching it from the `conda-forge` repository). If you chose not to create an `mlbook` environment, then just remove the `-n mlbook` option.

Next, you can optionally install Jupyter extensions. These are useful to have nice tables of contents in the notebooks, but they are not required.
    
    
    $ conda install -n mlbook -c conda-forge jupyter_contrib_nbextensions
    

You are all set! Next, jump to the Starting Jupyter section.

## Using pip

If you are not using Anaconda, you need to install several scientific Python libraries that are necessary for this project, in particular NumPy, Matplotlib, Pandas, Jupyter and TensorFlow (and a few others). For this, you can either use Python's integrated packaging system, pip, or you may prefer to use your system's own packaging system (if available, e.g. on Linux, or on MacOSX when using MacPorts or Homebrew). The advantage of using pip is that it is easy to create multiple isolated Python environments with different libraries and different library versions (e.g. one environment for each project). The advantage of using your system's packaging system is that there is less risk of having conflicts between your Python libraries and your system's other packages. Since I have many projects with different library requirements, I prefer to use pip with isolated environments.

These are the commands you need to type in a terminal if you want to use pip to install the required libraries. Note: in all the following commands, if you chose to use Python @abstr_number rather than Python @abstr_number , you must replace `pip @abstr_number` with `pip`, and `python @abstr_number` with `python`.

First you need to make sure you have the latest version of pip installed:
    
    
    $ pip @abstr_number  install --user --upgrade pip
    

The `--user` option will install the latest version of pip only for the current user. If you prefer to install it system wide (i.e. for all users), you must have administrator rights (e.g. use `sudo pip @abstr_number` instead of `pip @abstr_number` on Linux), and you should remove the `--user` option. The same is true of the command below that uses the `--user` option.

Next, you can optionally create an isolated environment. This is recommended as it makes it possible to have a different environment for each project (e.g. one for this project), with potentially very different libraries, and different versions:
    
    
    $ pip @abstr_number  install --user --upgrade virtualenv
    $ virtualenv -p `which python @abstr_number ` env
    

This creates a new directory called `env` in the current directory, containing an isolated Python environment based on Python @abstr_number . If you installed multiple versions of Python @abstr_number on your system, you can replace ``which python @abstr_number `` with the path to the Python executable you prefer to use.

Now you must activate this environment. You will need to run this command every time you want to use this environment.
    
    
    $ source ./env/bin/activate
    

Next, use pip to install the required python packages. If you are not using virtualenv, you should add the `--user` option (alternatively you could install the libraries system-wide, but this will probably require administrator rights, e.g. using `sudo pip @abstr_number` instead of `pip @abstr_number` on Linux).
    
    
    $ pip @abstr_number  install --upgrade -r requirements.txt
    

Great! You're all set, you just need to start Jupyter now.

## Starting Jupyter

If you want to use the Jupyter extensions (optional, they are mainly useful to have nice tables of contents), you first need to install them:
    
    
    $ jupyter contrib nbextension install --user
    

Then you can activate an extension, such as the Table of Contents ( @abstr_number ) extension:
    
    
    $ jupyter nbextension enable toc @abstr_number /main
    

Okay! You can now start Jupyter, simply type:
    
    
    $ jupyter notebook
    

This should open up your browser, and you should see Jupyter's tree view, with the contents of the current directory. If your browser does not open automatically, visit @abstr_hyperlink . Click on `index.ipynb` to get started!

Note: you can also visit @abstr_hyperlink to activate and configure Jupyter extensions.

Congrats! You are ready to learn Machine Learning, hands on!