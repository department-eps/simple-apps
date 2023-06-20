import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { InlineMath } from 'react-katex';

export function TableResult({ dataTable }) {
    return (
        <TableContainer component={Paper} sx={{ paddingTop: '40px', maxWidth: '100%' }}>
            <Table stickyHeader={true}>
                <TableHead>
                    <TableRow>
                        <TableCell sx={{ textAlign: 'center', fontSize: '20px' }}>Режим</TableCell>
                        <TableCell sx={{ textAlign: 'center', fontSize: '20px' }}><InlineMath math={'P_1'} />, pu</TableCell>
                        <TableCell sx={{ textAlign: 'center', fontSize: '20px' }}><InlineMath math={'\\delta_0'} />, deg</TableCell>
                        <TableCell sx={{ textAlign: 'center', fontSize: '20px' }}><InlineMath math={'K_s'} /></TableCell>
                        <TableCell sx={{ textAlign: 'center', fontSize: '20px' }}><InlineMath math={'K_d'} /></TableCell>
                        <TableCell sx={{ textAlign: 'center', fontSize: '20px' }}><InlineMath math={'\\lambda_1,_2'} /></TableCell>
                        <TableCell sx={{ textAlign: 'center', fontSize: '20px' }}><InlineMath math={'\\xi'} /></TableCell>
                        <TableCell sx={{ textAlign: 'center', fontSize: '20px' }}><InlineMath math={'f'} />, Hz</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {dataTable.map((row) => (
                        <>
                            {!isNaN(row.roots.root1.im) &&
                                <TableRow key={row.mode}>
                                    <TableCell sx={{ textAlign: 'center', fontSize: '20px' }}>{row.mode}</TableCell>
                                    <TableCell sx={{ textAlign: 'center', fontSize: '20px' }}>{row.P1 && row.P1.toFixed(2)}</TableCell>
                                    <TableCell sx={{ textAlign: 'center', fontSize: '20px' }}>{row?.delta0.toFixed(2)}</TableCell>
                                    <TableCell sx={{ textAlign: 'center', fontSize: '20px' }}>{row?.Ks.toFixed(2)}</TableCell>
                                    <TableCell sx={{ textAlign: 'center', fontSize: '20px' }}>{row?.Kd.toFixed(2)}</TableCell>
                                    <TableCell sx={{ textAlign: 'center', fontSize: '20px' }}>{row.roots?.root1.re.toFixed(4)} ± {row.roots?.root1.im.toFixed(4)}</TableCell>
                                    <TableCell sx={{ textAlign: 'center', fontSize: '20px' }}>{row?.ksi.toFixed(4)}</TableCell>
                                    <TableCell sx={{ textAlign: 'center', fontSize: '20px' }}>{row?.f.toFixed(4)}</TableCell>
                                </TableRow>
                            }
                        </>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};
