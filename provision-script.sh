
echo "
---------------------------------------------------
Testing symlink permissions (Windows)...
---------------------------------------------------"
sudo touch /link-test
ln -sf /link-test /home/ubuntu/ember-demo
if [ /home/ubuntu/ember-demo/link-test -f ]; then
	echo "Symlink test failed!"
	echo " "
	echo "If you're on Windows, run your shell application with admin permissions."
	echo "Otherwise, give your user symlink permissions."
else
	echo "
---------------------------------------------------
Installing NodeJS...
---------------------------------------------------"
	curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
	sudo apt-get install -y nodejs
	sudo apt-get install -y build-essential

	echo "
---------------------------------------------------
Setting up NPM configuration...
---------------------------------------------------"
	if [ ! -a /configured ]; then
		mkdir ~/.npm-packages
		npm config set prefix ${HOME}/.npm-packages
		export NPM_PACKAGES="${HOME}/.npm-packages"
		export PATH="$NPM_PACKAGES/bin:$PATH"
		unset MANPATH
		export MANPATH="$NPM_PACKAGES/share/man:$(manpath)"

		echo "prefix=${HOME}/.npm-packages" >> ~/.npmrc
		echo " " >> ~/.bashrc
		echo "NPM_PACKAGES=\"\${HOME}/.npm-packages\"" >> ~/.bashrc
		echo "PATH=\"\$NPM_PACKAGES/bin:\$PATH\"" >> ~/.bashrc
		echo "# Unset manpath so we can inherit from /etc/manpath via the \`manpath\` command" >> ~/.bashrc
		echo "unset MANPATH # delete if you already modified MANPATH elsewhere in your config" >> ~/.bashrc
		echo "export MANPATH=\"\$NPM_PACKAGES/share/man:\$(manpath)\"" >> ~/.bashrc
	else
		echo "
---------------------------------------------------
NPM has already been configured...
---------------------------------------------------"
	fi
	source ~/.bashrc
	sudo touch /configured

	echo "
---------------------------------------------------
Installing EmberJS...
---------------------------------------------------"
	npm install -g ember-cli bower
	npm install -g phantomjs

	echo "
---------------------------------------------------
Installing other libraries...
---------------------------------------------------"
	cd /home/ubuntu/ember-demo
	npm install
	bower install bootstrap
	ember install emberfire
	bower install moment

	echo "
---------------------------------------------------
Ember server is now ready!
You may now ssh into the VM and start the server.
---------------------------------------------------"
fi
sudo rm /link-test
rm /home/ubuntu/ember-demo/link-test