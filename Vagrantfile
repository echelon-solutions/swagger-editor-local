# Isolated build environment configuration for the project
#
# Why? To enable repeatable builds, whether you are on your machine,
#   someone else's machine, or you are running from a build box.
#
# For more information:
#   https://www.vagrantup.com/
#   https://docs.vagrantup.com/
#
# Author: Khalid Zoabi [khalid@echelon.solutions]

Vagrant.configure("2") do |config|

  config.vm.box = "ubuntu/trusty64"

  config.vm.hostname = "nodejs-build-environment"
  config.vm.network "private_network", ip: "192.168.33.10"

  config.vm.synced_folder ".", "/project"

  config.vm.provider "virtualbox" do |vb|
    vb.memory = "256"
  end

  config.vm.provision "shell", inline: <<-SHELL
    sudo apt-get update
    echo "Installing nodejs ..."
    curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -
    sudo apt-get install -y nodejs
  SHELL

end
