// eslint-disable-next-line no-unused-vars
declare interface IDotEnvLoaderRun {
	source: EDotEnvLoaderSource;
	fs: any | null;
	config: Array<string | Array<Array<string>>> | null;
	content: Array<
		string | Array<Array<string>> | Array<Array<any>> | any
	> | null;
	// eslint-disable-next-line no-unused-vars
	setFs(fs: any): IDotEnvLoaderRun;
	// eslint-disable-next-line no-unused-vars
	getFs(): any;
	// eslint-disable-next-line no-unused-vars
	validateFs(): void;
	// by default it is ./.app.env/.config it should be encoded with utf8
	run(
		// eslint-disable-next-line no-unused-vars
		envConfigPath?: string,
		// eslint-disable-next-line no-unused-vars
		encoding?: string
	): Array<string | Array<string>> | [];
	fileExists(
		// eslint-disable-next-line no-unused-vars
		filePath: string,
		// eslint-disable-next-line no-unused-vars
		error: { message: string; error?: boolean }
	): boolean;
	load(
		// eslint-disable-next-line no-unused-vars
		filePath: string | { current?: string; from?: string },
		// eslint-disable-next-line no-unused-vars
		encoding?: string,
		// eslint-disable-next-line no-unused-vars
		isConfig?: boolean
	): void;
	treatGarbage(
		// eslint-disable-next-line no-unused-vars
		filePath: string | { current?: string; from?: string },
		// eslint-disable-next-line no-unused-vars
		encoding?: string,
		// eslint-disable-next-line no-unused-vars
		debug?: boolean,
		// eslint-disable-next-line no-unused-vars
		isConfig?: boolean
	): void;
	// eslint-disable-next-line no-unused-vars
	populateProcessEnvs(): void;
	// eslint-disable-next-line no-unused-vars
	populateAppEnvs(): void;
	// eslint-disable-next-line no-unused-vars
	doDebug(isConfig: boolean): boolean;
	// eslint-disable-next-line no-unused-vars
	formatUndefined(
		// eslint-disable-next-line no-unused-vars
		value: undefined,
		// eslint-disable-next-line no-unused-vars
		varName: string
	): string | null | undefined;
	// eslint-disable-next-line no-unused-vars
	formatNull(
		// eslint-disable-next-line no-unused-vars
		value: undefined,
		// eslint-disable-next-line no-unused-vars
		varName: string
	): string | null | undefined;
}
