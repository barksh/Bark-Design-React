main: start-storybook

start-storybook:
	@echo "Starting Storybook"
	@yarn dev

tests:
	@echo "Running Tests"
	@sudoo-build --type typescript-react test

publish-dry-run:
	@echo "Publishing Dry Run"
	@sudoo-build --type typescript-react publish-dry-run

publish:
	@echo "Publishing"
	@sudoo-build --type typescript-react publish
