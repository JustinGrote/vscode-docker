/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

export interface DockerInfo {
    readonly OSType: 'linux' | 'windows';
}

export interface PruneResult {
    readonly objectsRemoved: number;
    readonly spaceFreed: number;
}

export interface DockerObject {
    readonly id: string;
    readonly name: string;
    readonly createdTime: number;
}
