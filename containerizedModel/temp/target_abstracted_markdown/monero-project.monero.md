# Monero

Copyright (c) @abstr_number - @abstr_number The Monero Project.   
Portions Copyright (c) @abstr_number - @abstr_number The Cryptonote developers.

## Table of Contents

  * Development resources
  * Vulnerability response
  * Research
  * Announcements
  * Translations
  * Build 
    * IMPORTANT
  * Coverage
  * Introduction
  * About this project
  * Supporting the project
  * License
  * Contributing
  * Scheduled software upgrades
  * Release staging schedule and protocol
  * Compiling Monero from source 
    * Dependencies



## Development resources

  * Web: @abstr_hyperlink 
  * Forum: @abstr_hyperlink 
  * Mail: @abstr_hyperlink 
  * GitHub: @abstr_hyperlink 
  * IRC: @abstr_hyperlink 



## Vulnerability response

  * Our @abstr_hyperlink encourages responsible disclosure
  * We are also available via @abstr_hyperlink 



## Research

The @abstr_hyperlink is an open forum where the community coordinates research into Monero cryptography, protocols, fungibility, analysis, and more. We welcome collaboration and contributions from outside researchers! Because not all Lab work and publications are distributed as traditional preprints or articles, they may be easy to miss if you are conducting literature reviews for your own Monero research. You are encouraged to get in touch with our researchers if you have questions, wish to collaborate, or would like guidance to help avoid unnecessarily duplicating earlier or known work.

Our researchers are available on IRC in @abstr_hyperlink or by email:

  * Sarang Noether, Ph.D.: @abstr_hyperlink or @abstr_hyperlink ; @abstr_hyperlink 
  * Surae Noether (Brandon Goodell), Ph.D.: @abstr_hyperlink or @abstr_hyperlink ; @abstr_hyperlink 



## Announcements

  * You can subscribe to an @abstr_hyperlink to get critical announcements from the Monero core team. The announcement list can be very helpful for knowing when software updates are needed.



## Translations

The CLI wallet is available in different languages. If you want to help translate it, see our self-hosted localization platform, Pootle, on @abstr_hyperlink . Every translation _must_ be uploaded on the platform, pull requests directly editing the code in this repository will be closed. If you need help with Pootle, you can find a guide with screenshots @abstr_hyperlink . 

If you need help/support/info about translations, contact the localization workgroup. You can find the complete list of contacts on the repository of the workgroup: @abstr_hyperlink .

## Build

### IMPORTANT

These builds are of the master branch, which is used for active development and can be either unstable or incompatible with release software. Please compile release branches.

| Operating System | Processor | Status | | --------------------- | -------- |--------| | Ubuntu @abstr_number . @abstr_number | i @abstr_number | @abstr_hyperlink | Ubuntu @abstr_number . @abstr_number | amd @abstr_number | @abstr_hyperlink | Ubuntu @abstr_number . @abstr_number | armv @abstr_number | @abstr_hyperlink | Debian Stable | armv @abstr_number | @abstr_hyperlink | macOS @abstr_number . @abstr_number | amd @abstr_number | @abstr_hyperlink | macOS @abstr_number . @abstr_number | amd @abstr_number | @abstr_hyperlink | macOS @abstr_number . @abstr_number | amd @abstr_number | @abstr_hyperlink | FreeBSD @abstr_number | amd @abstr_number | @abstr_hyperlink | DragonFly BSD @abstr_number . @abstr_number | amd @abstr_number | @abstr_hyperlink | Windows (MSYS @abstr_number /MinGW) | i @abstr_number | @abstr_hyperlink | Windows (MSYS @abstr_number /MinGW) | amd @abstr_number | @abstr_hyperlink 

## Coverage

| Type | Status | |-----------|--------| | Coverity | @abstr_hyperlink | Coveralls | @abstr_hyperlink | License | @abstr_hyperlink 

## Introduction

Monero is a private, secure, untraceable, decentralised digital currency. You are your bank, you control your funds, and nobody can trace your transfers unless you allow them to do so.

**Privacy:** Monero uses a cryptographically sound system to allow you to send and receive funds without your transactions being easily revealed on the blockchain (the ledger of transactions that everyone has). This ensures that your purchases, receipts, and all transfers remain absolutely private by default.

**Security:** Using the power of a distributed peer-to-peer consensus network, every transaction on the network is cryptographically secured. Individual wallets have a @abstr_number word mnemonic seed that is only displayed once, and can be written down to backup the wallet. Wallet files are encrypted with a passphrase to ensure they are useless if stolen.

**Untraceability:** By taking advantage of ring signatures, a special property of a certain type of cryptography, Monero is able to ensure that transactions are not only untraceable, but have an optional measure of ambiguity that ensures that transactions cannot easily be tied back to an individual user or computer.

**Decentralization:** The utility of monero depends on its decentralised peer-to-peer consensus network - anyone should be able to run the monero software, validate the integrity of the blockchain, and participate in all aspects of the monero network using consumer-grade commodity hardware. Decentralization of the monero network is maintained by software development that minimizes the costs of running the monero software and inhibits the proliferation of specialized, non-commodity hardware. 

## About this project

This is the core implementation of Monero. It is open source and completely free to use without restrictions, except for those specified in the license agreement below. There are no restrictions on anyone creating an alternative implementation of Monero that uses the protocol and network in a compatible manner.

As with many development projects, the repository on Github is considered to be the "staging" area for the latest changes. Before changes are merged into that branch on the main repository, they are tested by individual developers in their own branches, submitted as a pull request, and then subsequently tested by contributors who focus on testing and code reviews. That having been said, the repository should be carefully considered before using it in a production environment, unless there is a patch in the repository for a particular show-stopping issue you are experiencing. It is generally a better idea to use a tagged release for stability.

**Anyone is welcome to contribute to Monero's codebase!** If you have a fix or code change, feel free to submit it as a pull request directly to the "master" branch. In cases where the change is relatively small or does not affect other parts of the codebase it may be merged in immediately by any one of the collaborators. On the other hand, if the change is particularly large or complex, it is expected that it will be discussed at length either well in advance of the pull request being submitted, or even directly on the pull request.

## Supporting the project

Monero is a @abstr_number % community-sponsored endeavor. If you want to join our efforts, the easiest thing you can do is support the project financially. Both Monero and Bitcoin donations can be made to **donate.getmonero.org** if using a client that supports the @abstr_hyperlink standard. Alternatively you can send XMR to the Monero donation address via the `donate` command (type `help` in the command-line wallet for details).

The Monero donation address is: `@abstr_number AFFq @abstr_number kSiGBoZ @abstr_number NMDwYtN @abstr_number obc @abstr_number AemS @abstr_number DBLWs @abstr_number H @abstr_number otXft @abstr_number XjrpDtQGv @abstr_number SqSsaBYBb @abstr_number uNbr @abstr_number VBBEt @abstr_number f @abstr_number wfn @abstr_number RVGQBEP @abstr_number A` (viewkey: `f @abstr_number cc @abstr_number d @abstr_number a @abstr_number b @abstr_number a @abstr_number d @abstr_number a @abstr_number dcf @abstr_number b @abstr_number a @abstr_number b @abstr_number b @abstr_number c @abstr_number`)

The Bitcoin donation address is: `@abstr_number KTexdemPdxSBcG @abstr_number heUuTjDRYqbC @abstr_number ZL @abstr_number H`

Core development funding and/or some supporting services are also graciously provided by sponsors:

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

There are also several mining pools that kindly donate a portion of their fees, @abstr_hyperlink .

## License

See LICENSE.

## Contributing

If you want to help out, see CONTRIBUTING for a set of guidelines.

## Scheduled software upgrades

Monero uses a fixed-schedule software upgrade (hard fork) mechanism to implement new features. This means that users of Monero (end users and service providers) should run current versions and upgrade their software on a regular schedule. Software upgrades occur during the months of April and October. The required software for these upgrades will be available prior to the scheduled date. Please check the repository prior to this date for the proper Monero software version. Below is the historical schedule and the projected schedule for the next upgrade. Dates are provided in the format YYYY-MM-DD.

| Software upgrade block height | Date | Fork version | Minimum Monero version | Recommended Monero version | Details |   
| ------------------------------ | -----------| ----------------- | ---------------------- | -------------------------- | ---------------------------------------------------------------------------------- | | @abstr_number | @abstr_number - @abstr_number - @abstr_number | v @abstr_number | v @abstr_number . @abstr_number . @abstr_number | v @abstr_number . @abstr_number . @abstr_number | Allow only >= ringsize @abstr_number , blocktime = @abstr_number seconds, fee-free blocksize @abstr_number kb | | @abstr_number | @abstr_number - @abstr_number - @abstr_number | v @abstr_number | v @abstr_number . @abstr_number . @abstr_number | v @abstr_number . @abstr_number . @abstr_number | Splits coinbase into denominations | | @abstr_number | @abstr_number - @abstr_number - @abstr_number | v @abstr_number | v @abstr_number . @abstr_number . @abstr_number | v @abstr_number . @abstr_number . @abstr_number . @abstr_number | Allow normal and RingCT transactions | | @abstr_number | @abstr_number - @abstr_number - @abstr_number | v @abstr_number | v @abstr_number . @abstr_number . @abstr_number . @abstr_number | v @abstr_number . @abstr_number . @abstr_number . @abstr_number | Adjusted minimum blocksize and fee algorithm | | @abstr_number | @abstr_number - @abstr_number - @abstr_number | v @abstr_number | v @abstr_number . @abstr_number . @abstr_number . @abstr_number | v @abstr_number . @abstr_number . @abstr_number . @abstr_number | Allow only RingCT transactions, allow only >= ringsize @abstr_number | | @abstr_number | @abstr_number - @abstr_number - @abstr_number | v @abstr_number | v @abstr_number . @abstr_number . @abstr_number . @abstr_number | v @abstr_number . @abstr_number . @abstr_number . @abstr_number | Cryptonight variant @abstr_number , ringsize >= @abstr_number , sorted inputs | @abstr_number | @abstr_number - @abstr_number - @abstr_number | v @abstr_number | v @abstr_number . @abstr_number . @abstr_number . @abstr_number | v @abstr_number . @abstr_number . @abstr_number . @abstr_number | max transaction size at half the penalty free block size, bulletproofs enabled, cryptonight variant @abstr_number , fixed ringsize @abstr_hyperlink | @abstr_number | @abstr_number - @abstr_number - @abstr_number | v @abstr_number | v @abstr_number . @abstr_number . @abstr_number . @abstr_number | v @abstr_number . @abstr_number . @abstr_number . @abstr_number | bulletproofs required | @abstr_number | @abstr_number - @abstr_number - @abstr_number | v @abstr_number | v @abstr_number . @abstr_number . @abstr_number . @abstr_number | v @abstr_number . @abstr_number . @abstr_number . @abstr_number | New PoW based on Cryptonight-R, new block weight algorithm, slightly more efficient RingCT format | @abstr_number | @abstr_number - @abstr_number - @abstr_number | v @abstr_number | v @abstr_number . @abstr_number . @abstr_number . @abstr_number | v @abstr_number . @abstr_number . @abstr_number . @abstr_number | forbid old RingCT transaction format | XXXXXXX | @abstr_number - @abstr_number -XX | XX | XXXXXXXXX | XXXXXXXXX | X

X's indicate that these details have not been determined as of commit date.

## Release staging schedule and protocol

Approximately three months prior to a scheduled software upgrade, a branch from Master will be created with the new release version tag. Pull requests that address bugs should then be made to both Master and the new release branch. Pull requests that require extensive review and testing (generally, optimizations and new features) should _not_ be made to the release branch.

## Compiling Monero from source

### Dependencies

The following table summarizes the tools and libraries required to build. A few of the libraries are also included in this repository (marked as "Vendored"). By default, the build uses the library installed on the system, and ignores the vendored sources. However, if no library is found installed on the system, then the vendored source will be built and used. The vendored sources are also used for statically-linked builds because distribution packages often include only shared library binaries (`.so`) but not static library archives (`.a`).

| Dep | Min. version | Vendored | Debian/Ubuntu pkg | Arch pkg | Fedora | Optional | Purpose | | ------------ | ------------- | -------- | ------------------ | ------------ | ----------------- | -------- | -------------- | | GCC | @abstr_number . @abstr_number . @abstr_number | NO | `build-essential` | `base-devel` | `gcc` | NO | | | CMake | @abstr_number . @abstr_number | NO | `cmake` | `cmake` | `cmake` | NO | | | pkg-config | any | NO | `pkg-config` | `base-devel` | `pkgconf` | NO | | | Boost | @abstr_number . @abstr_number | NO | `libboost-all-dev` | `boost` | `boost-devel` | NO | C++ libraries | | OpenSSL | basically any | NO | `libssl-dev` | `openssl` | `openssl-devel` | NO | sha @abstr_number sum | | libzmq | @abstr_number . @abstr_number . @abstr_number | NO | `libzmq @abstr_number -dev` | `zeromq` | `cppzmq-devel` | NO | ZeroMQ library | | OpenPGM | ? | NO | `libpgm-dev` | `libpgm` | `openpgm-devel` | NO | For ZeroMQ | | libnorm[ @abstr_number ] | ? | NO | `libnorm-dev` | | `| YES | For ZeroMQ | | libunbound | @abstr_number . @abstr_number . @abstr_number | YES |`libunbound-dev`|`unbound`|`unbound-devel`| NO | DNS resolver | | libsodium | ? | NO |`libsodium-dev`|`libsodium`|`libsodium-devel`| NO | cryptography | | libunwind | any | NO |`libunwind @abstr_number -dev`|`libunwind`|`libunwind-devel`| YES | Stack traces | | liblzma | any | NO |`liblzma-dev`|`xz`|`xz-devel`| YES | For libunwind | | libreadline | @abstr_number . @abstr_number . @abstr_number | NO |`libreadline @abstr_number -dev`|`readline`|`readline-devel`| YES | Input editing | | ldns | @abstr_number . @abstr_number . @abstr_number | NO |`libldns-dev`|`ldns`|`ldns-devel`| YES | SSL toolkit | | expat | @abstr_number . @abstr_number | NO |`libexpat @abstr_number -dev`|`expat`|`expat-devel`| YES | XML parsing | | GTest | @abstr_number . @abstr_number | YES |`libgtest-dev`[ @abstr_number ] |`gtest`|`gtest-devel`| YES | Test suite | | Doxygen | any | NO |`doxygen`|`doxygen`|`doxygen`| YES | Documentation | | Graphviz | any | NO |`graphviz`|`graphviz`|`graphviz` | YES | Documentation |

[ @abstr_number ] On Debian/Ubuntu `libgtest-dev` only includes sources and headers. You must build the library binary manually. This can be done with the following command `sudo apt-get install libgtest-dev && cd /usr/src/gtest && sudo cmake . && sudo make && sudo mv libg* /usr/lib/ @abstr_code_section sudo apt update && sudo apt install build-essential cmake pkg-config libboost-all-dev libssl-dev libzmq @abstr_number -dev libunbound-dev libsodium-dev libunwind @abstr_number -dev liblzma-dev libreadline @abstr_number -dev libldns-dev libexpat @abstr_number -dev doxygen graphviz libpgm-dev`

Install all dependencies at once on macOS with the provided Brewfile: `brew update && brew bundle --file=contrib/brew/Brewfile @abstr_code_section pkg install git gmake cmake pkgconf boost-libs cppzmq libsodium`

### Cloning the repository

Clone recursively to pull-in needed submodule(s):

`$ git clone --recursive https://github.com/monero-project/monero`

If you already have a repo cloned, initialize and update:

`$ cd monero && git submodule init && git submodule update`

### Build instructions

Monero uses the CMake build system and a top-level Makefile that invokes cmake commands as needed.

#### On Linux and macOS

  * Install the dependencies
  * Change to the root of the source code directory, change to the most recent release branch, and build:

@abstr_code_section 

_Optional_ : If your machine has several cores and enough memory, enable parallel build by running `make -j<number of threads>` instead of `make`. For this to be worthwhile, the machine should have one core and about @abstr_number GB of RAM available per thread.

_Note_ : If cmake can not find zmq.hpp file on macOS, installing `zmq.hpp` from https://github.com/zeromq/cppzmq to `/usr/local/include` should fix that error.

_Note_ : The instructions above will compile the most stable release of the Monero software. If you would like to use and test the most recent software, use `git checkout master`. The master branch may contain updates that are both unstable and incompatible with release software, though testing is always encouraged.

  * The resulting executables can be found in `build/release/bin`

  * Add `PATH="$PATH:$HOME/monero/build/release/bin"` to `.profile`

  * Run Monero with `monerod --detach`

  * **Optional** : build and run the test suite to verify the binaries:

@abstr_code_section 

_NOTE_ : `core_tests` test may take a few hours to complete.

  * **Optional** : to build binaries suitable for debugging:

@abstr_code_section 

  * **Optional** : to build statically-linked binaries:

@abstr_code_section 




Dependencies need to be built with -fPIC. Static libraries usually aren't, so you may have to build them yourself with -fPIC. Refer to their documentation for how to build them.

  * **Optional** : build documentation in `doc/html` (omit `HAVE_DOT=YES` if `graphviz` is not installed):

@abstr_code_section 




#### On the Raspberry Pi

Tested on a Raspberry Pi Zero with a clean install of minimal Raspbian Stretch ( @abstr_number - @abstr_number - @abstr_number or later) from https://www.raspberrypi.org/downloads/raspbian/. If you are using Raspian Jessie, please see note in the following section.

  * `apt-get update && apt-get upgrade` to install all of the latest software

  * Install the dependencies for Monero from the 'Debian' column in the table above.

  * Increase the system swap size:

@abstr_code_section 

  * If using an external hard disk without an external power supply, ensure it gets enough power to avoid hardware issues when syncing, by adding the line "max_usb_current= @abstr_number " to /boot/config.txt

  * Clone monero and checkout the most recent release version:

@abstr_code_section 

  * Build:

@abstr_code_section 

  * Wait @abstr_number - @abstr_number hours

  * The resulting executables can be found in `build/release/bin`

  * Add `PATH="$PATH:$HOME/monero/build/release/bin"` to `.profile`

  * Run Monero with `monerod --detach`

  * You may wish to reduce the size of the swap file after the build has finished, and delete the boost directory from your home directory




#### _Note for Raspbian Jessie users:_

If you are using the older Raspbian Jessie image, compiling Monero is a bit more complicated. The version of Boost available in the Debian Jessie repositories is too old to use with Monero, and thus you must compile a newer version yourself. The following explains the extra steps, and has been tested on a Raspberry Pi @abstr_number with a clean install of minimal Raspbian Jessie.

  * As before, `apt-get update && apt-get upgrade` to install all of the latest software, and increase the system swap size

@abstr_code_section 

  * Then, install the dependencies for Monero except `libunwind` and `libboost-all-dev`

  * Install the latest version of boost (this may first require invoking `apt-get remove --purge libboost*` to remove a previous version if you're not using a clean install):

@abstr_code_section 

  * Wait ~ @abstr_number hours

@abstr_code_section 

  * Wait ~ @abstr_number hours

  * From here, follow the general Raspberry Pi instructions from the "Clone monero and checkout most recent release version" step.




#### On Windows:

Binaries for Windows are built on Windows using the MinGW toolchain within @abstr_hyperlink . The MSYS @abstr_number environment emulates a POSIX system. The toolchain runs within the environment and _cross-compiles_ binaries that can run outside of the environment as a regular Windows application.

**Preparing the build environment**

  * Download and install the @abstr_hyperlink , either the @abstr_number -bit or the @abstr_number -bit package, depending on your system.
  * Open the MSYS shell via the `MSYS @abstr_number Shell` shortcut
  * Update packages using pacman: 

@abstr_code_section 

  * Exit the MSYS shell using Alt+F @abstr_number 

  * Edit the properties for the `MSYS @abstr_number Shell` shortcut changing "msys @abstr_number _shell.bat" to "msys @abstr_number _shell.cmd -mingw @abstr_number " for @abstr_number -bit builds or "msys @abstr_number _shell.cmd -mingw @abstr_number " for @abstr_number -bit builds
  * Restart MSYS shell via modified shortcut and update packages again using pacman: 

@abstr_code_section 

  * Install dependencies:

To build for @abstr_number -bit Windows:

@abstr_code_section 

To build for @abstr_number -bit Windows:

@abstr_code_section 

  * Open the MingW shell via `MinGW-w @abstr_number -Win @abstr_number Shell` shortcut on @abstr_number -bit Windows or `MinGW-w @abstr_number -Win @abstr_number Shell` shortcut on @abstr_number -bit Windows. Note that if you are running @abstr_number -bit Windows, you will have both @abstr_number -bit and @abstr_number -bit MinGW shells.




**Cloning**

  * To git clone, run:

@abstr_code_section 




**Building**

  * Change to the cloned directory, run:

@abstr_code_section 

  * If you would like a specific @abstr_hyperlink , do a git checkout for that version. eg. 'v @abstr_number . @abstr_number . @abstr_number . @abstr_number '. If you don't care about the version and just want binaries from master, skip this step:

@abstr_code_section 

  * If you are on a @abstr_number -bit system, run:

@abstr_code_section 

  * If you are on a @abstr_number -bit system, run:

@abstr_code_section 

  * The resulting executables can be found in `build/release/bin`

  * **Optional** : to build Windows binaries suitable for debugging on a @abstr_number -bit system, run:

@abstr_code_section 

  * **Optional** : to build Windows binaries suitable for debugging on a @abstr_number -bit system, run:

@abstr_code_section 

  * The resulting executables can be found in `build/debug/bin`




### On FreeBSD:

The project can be built from scratch by following instructions for Linux above(but use `gmake` instead of `make`). If you are running monero in a jail you need to add the flag: `allow.sysvipc= @abstr_number` to your jail configuration, otherwise lmdb will throw the error message: `Failed to open lmdb environment: Function not implemented`.

We expect to add Monero into the ports tree in the near future, which will aid in managing installations using ports or packages.

### On OpenBSD:

#### OpenBSD < @abstr_number . @abstr_number

This has been tested on OpenBSD @abstr_number . @abstr_number .

You will need to add a few packages to your system. `pkg_add db cmake gcc gcc-libs g++ gtest`.

The doxygen and graphviz packages are optional and require the xbase set.

The Boost package has a bug that will prevent librpc.a from building correctly. In order to fix this, you will have to Build boost yourself from scratch. Follow the directions here (under "Building Boost"): https://github.com/bitcoin/bitcoin/blob/master/doc/build-openbsd.md

You will have to add the serialization, date_time, and regex modules to Boost when building as they are needed by Monero.

To build: `env CC=egcc CXX=eg++ CPP=ecpp DEVELOPER_LOCAL_TOOLS= @abstr_number BOOST_ROOT=/path/to/the/boost/you/built make release-static- @abstr_number`

#### OpenBSD @abstr_number . @abstr_number and @abstr_number . @abstr_number

You will need to add a few packages to your system. `pkg_add cmake zeromq libiconv`.

The doxygen and graphviz packages are optional and require the xbase set.

Build the Boost library using clang. This guide is derived from: https://github.com/bitcoin/bitcoin/blob/master/doc/build-openbsd.md

We assume you are compiling with a non-root user and you have `doas` enabled.

Note: do not use the boost package provided by OpenBSD, as we are installing boost to `/usr/local`.

@abstr_code_section 

Build the cppzmq bindings.

We assume you are compiling with a non-root user and you have `doas` enabled.

@abstr_code_section 

Build monero: @abstr_code_section 

#### OpenBSD >= @abstr_number . @abstr_number

You will need to add a few packages to your system. `pkg_add cmake gmake zeromq cppzmq libiconv boost`.

The doxygen and graphviz packages are optional and require the xbase set.

Build monero: `env DEVELOPER_LOCAL_TOOLS= @abstr_number BOOST_ROOT=/usr/local gmake release-static`

Note: you may encounter the following error, when compiling the latest version of monero as a normal user:

@abstr_code_section 

Then you need to increase the data ulimit size to @abstr_number GB and try again: `ulimit -d @abstr_number`

### On Solaris:

The default Solaris linker can't be used, you have to install GNU ld, then run cmake manually with the path to your copy of GNU ld:

@abstr_code_section 

Then you can run make as usual.

### On Linux for Android (using docker):

@abstr_code_section 

### Building portable statically linked binaries

By default, in either dynamically or statically linked builds, binaries target the specific host processor on which the build happens and are not portable to other processors. Portable binaries can be built using the following targets:

  * `make release-static-linux-x @abstr_number _ @abstr_number` builds binaries on Linux on x @abstr_number _ @abstr_number portable across POSIX systems on x @abstr_number _ @abstr_number processors
  * `make release-static-linux-i @abstr_number` builds binaries on Linux on x @abstr_number _ @abstr_number or i @abstr_number portable across POSIX systems on i @abstr_number processors
  * `make release-static-linux-armv @abstr_number` builds binaries on Linux portable across POSIX systems on armv @abstr_number processors
  * `make release-static-linux-armv @abstr_number` builds binaries on Linux portable across POSIX systems on armv @abstr_number processors
  * `make release-static-linux-armv @abstr_number` builds binaries on Linux portable across POSIX systems on armv @abstr_number processors
  * `make release-static-win @abstr_number` builds binaries on @abstr_number -bit Windows portable across @abstr_number -bit Windows systems
  * `make release-static-win @abstr_number` builds binaries on @abstr_number -bit or @abstr_number -bit Windows portable across @abstr_number -bit Windows systems



### Cross Compiling

You can also cross-compile static binaries on Linux for Windows and macOS with the `depends` system.

  * `make depends target=x @abstr_number _ @abstr_number -linux-gnu` for @abstr_number -bit linux binaries.
  * `make depends target=x @abstr_number _ @abstr_number -w @abstr_number -mingw @abstr_number` for @abstr_number -bit windows binaries. 
    * Requires: `python @abstr_number g++-mingw-w @abstr_number -x @abstr_number - @abstr_number wine @abstr_number . @abstr_number bc`
  * `make depends target=x @abstr_number _ @abstr_number -apple-darwin @abstr_number` for macOS binaries. 
    * Requires: `cmake imagemagick libcap-dev librsvg @abstr_number -bin libz-dev libbz @abstr_number -dev libtiff-tools python-dev`
  * `make depends target=i @abstr_number -linux-gnu` for @abstr_number -bit linux binaries. 
    * Requires: `g++-multilib bc`
  * `make depends target=i @abstr_number -w @abstr_number -mingw @abstr_number` for @abstr_number -bit windows binaries. 
    * Requires: `python @abstr_number g++-mingw-w @abstr_number -i @abstr_number`
  * `make depends target=arm-linux-gnueabihf` for armv @abstr_number binaries. 
    * Requires: `g++-arm-linux-gnueabihf`
  * `make depends target=aarch @abstr_number -linux-gnu` for armv @abstr_number binaries. 
    * Requires: `g++-aarch @abstr_number -linux-gnu`



The required packages are the names for each toolchain on apt. Depending on your distro, they may have different names.

Using `depends` might also be easier to compile Monero on Windows than using MSYS. Activate Windows Subsystem for Linux (WSL) with a distro (for example Ubuntu), install the apt build-essentials and follow the `depends` steps as depicted above.

The produced binaries still link libc dynamically. If the binary is compiled on a current distribution, it might not run on an older distribution with an older installation of libc. Passing `-DBACKCOMPAT=ON` to cmake will make sure that the binary will run on systems having at least libc version @abstr_number . @abstr_number .

## Installing Monero from a package

**DISCLAIMER: These packages are not part of this repository or maintained by this project's contributors, and as such, do not go through the same review process to ensure their trustworthiness and security.**

Packages are available for

  * Ubuntu and @abstr_hyperlink systems, via a community contributed build.

@abstr_code_section 




Installing a snap is very quick. Snaps are secure. They are isolated with all of their dependencies. Snaps also auto update when a new version is released.

  * Arch Linux (via @abstr_hyperlink ):

    * Stable release: @abstr_hyperlink 
    * Bleeding edge: @abstr_hyperlink 
  * Void Linux:

@abstr_code_section 

  * GuixSD

@abstr_code_section 

  * Docker

@abstr_code_section 

  * The build needs @abstr_number GB space.

  * Wait one hour or more



Packaging for your favorite distribution would be a welcome contribution!

## Running monerod

The build places the binary in `bin/` sub-directory within the build directory from which cmake was invoked (repository root by default). To run in foreground:

@abstr_code_section 

To list all available options, run `./bin/monerod --help`. Options can be specified either on the command line or in a configuration file passed by the `--config-file` argument. To specify an option in the configuration file, add a line with the syntax `argumentname=value`, where `argumentname` is the name of the argument without the leading dashes, for example `log-level= @abstr_number`.

To run in background:

@abstr_code_section 

To run as a systemd service, copy monerod.service to `/etc/systemd/system/` and monerod.conf to `/etc/`. The example service assumes that the user `monero` exists and its home is the data directory specified in the example config.

If you're on Mac, you may need to add the `--max-concurrency @abstr_number` option to monero-wallet-cli, and possibly monerod, if you get crashes refreshing.

## Internationalization

See README.i @abstr_number n.md.

## Using Tor

> There is a new, still experimental, integration with Tor. The feature allows connecting over IPv @abstr_number and Tor simulatenously - IPv @abstr_number is used for relaying blocks and relaying transactions received by peers whereas Tor is used solely for relaying transactions received over local RPC. This provides privacy and better protection against surrounding node (sybil) attacks.

While Monero isn't made to integrate with Tor, it can be used wrapped with torsocks, by setting the following configuration parameters and environment variables:

  * `--p @abstr_number p-bind-ip @abstr_number . @abstr_number . @abstr_number . @abstr_number` on the command line or `p @abstr_number p-bind-ip= @abstr_number . @abstr_number . @abstr_number . @abstr_number` in monerod.conf to disable listening for connections on external interfaces.
  * `--no-igd` on the command line or `no-igd= @abstr_number` in monerod.conf to disable IGD (UPnP port forwarding negotiation), which is pointless with Tor.
  * `DNS_PUBLIC=tcp` or `DNS_PUBLIC=tcp://x.x.x.x` where x.x.x.x is the IP of the desired DNS server, for DNS requests to go over TCP, so that they are routed through Tor. When IP is not specified, monerod uses the default list of servers defined in src/common/dns_utils.cpp.
  * `TORSOCKS_ALLOW_INBOUND= @abstr_number` to tell torsocks to allow monerod to bind to interfaces to accept connections from the wallet. On some Linux systems, torsocks allows binding to localhost by default, so setting this variable is only necessary to allow binding to local LAN/VPN interfaces to allow wallets to connect from remote hosts. On other systems, it may be needed for local wallets as well.
  * Do NOT pass `--detach` when running through torsocks with systemd, (see utils/systemd/monerod.service for details).
  * If you use the wallet with a Tor daemon via the loopback IP (eg, @abstr_number . @abstr_number . @abstr_number . @abstr_number : @abstr_number ), then use `--untrusted-daemon` unless it is your own hidden service.



Example command line to start monerod through Tor:

@abstr_code_section 

### Using Tor on Tails

TAILS ships with a very restrictive set of firewall rules. Therefore, you need to add a rule to allow this connection too, in addition to telling torsocks to allow inbound connections. Full example:

@abstr_code_section 

## Debugging

This section contains general instructions for debugging failed installs or problems encountered with Monero. First, ensure you are running the latest version built from the Github repo.

### Obtaining stack traces and core dumps on Unix systems

We generally use the tool `gdb` (GNU debugger) to provide stack trace functionality, and `ulimit` to provide core dumps in builds which crash or segfault.

  * To use `gdb` in order to obtain a stack trace for a build that has stalled:



Run the build.

Once it stalls, enter the following command:

@abstr_code_section 

Type `thread apply all bt` within gdb in order to obtain the stack trace

  * If however the core dumps or segfaults:



Enter `ulimit -c unlimited` on the command line to enable unlimited filesizes for core dumps

Enter `echo core | sudo tee /proc/sys/kernel/core_pattern` to stop cores from being hijacked by other tools

Run the build.

When it terminates with an output along the lines of "Segmentation fault (core dumped)", there should be a core dump file in the same directory as monerod. It may be named just `core`, or `core.xxxx` with numbers appended.

You can now analyse this core dump with `gdb` as follows:

@abstr_code_section 

Print the stack trace with `bt`

#### To run monero within gdb:

Type `gdb /path/to/monerod`

Pass command-line options with `--args` followed by the relevant arguments

Type `run` to run monerod

### Analysing memory corruption

There are two tools available:

#### ASAN

Configure Monero with the -D SANITIZE=ON cmake flag, eg:

@abstr_code_section 

You can then run the monero tools normally. Performance will typically halve.

#### valgrind

Install valgrind and run as `valgrind /path/to/monerod`. It will be very slow.

### LMDB

Instructions for debugging suspected blockchain corruption as per @HYC

There is an `mdb_stat` command in the LMDB source that can print statistics about the database but it's not routinely built. This can be built with the following command:

@abstr_code_section 

The output of `mdb_stat -ea <path to blockchain dir>` will indicate inconsistencies in the blocks, block_heights and block_info table.

The output of `mdb_dump -s blocks <path to blockchain dir>` and `mdb_dump -s block_info <path to blockchain dir>` is useful for indicating whether blocks and block_info contain the same keys.

These records are dumped as hex data, where the first line is the key and the second line is the data.
