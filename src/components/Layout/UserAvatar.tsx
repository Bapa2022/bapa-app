import React, { useEffect, useState } from 'react';
import { Avatar, Menu } from '@mantine/core';
import { useAppSelector, useAppDispatch } from 'src/store/hooks';
import { IconCategory, IconLogout } from '@tabler/icons-react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { authSelector, logout } from 'src/features/Auth';

export default function UserAvatar() {
  const { user, isAdmin } = useAppSelector(authSelector);
  const [initials, setInitials] = useState('');

  const dispatch = useAppDispatch();
  const router = useRouter();

  const logoutHandle = () => {
    dispatch(logout());
    router.push('/login');
  };

  useEffect(() => {
    if (user && user.name) {
      setInitials(
        user.name
          .split(' ', 2)
          .map(name => name[0])
          .join('')
      );
    }
  }, [user?.name]);

  return (
    <Menu
      shadow="xl"
      transitionProps={{ transition: 'pop-top-right', duration: 150 }}
    >
      <Menu.Target>
        <Avatar
          src={user?.profilePhoto?.url}
          alt={user?.name}
          radius="xl"
          color="blue"
          className="cursor-pointer"
        >
          <span className="text-cyan-600">{initials}</span>
        </Avatar>
      </Menu.Target>
      <Menu.Dropdown>
        <div className="mb-2 px-2">
          <p className="text-center text-sm font-bold">{user?.name}</p>
          {isAdmin && (
            <p className="scale-90 text-center text-xs italic tracking-wider text-dark dark:text-gray-200">
              Administrador
            </p>
          )}
          <p className="scale-90 text-center text-sm text-dark dark:text-gray-100">
            {user?.email}
          </p>
        </div>
        <Menu.Divider />
        <Menu.Item>
          <Link href="/admin/profile">Perfil de usuario</Link>
        </Menu.Item>
        <Menu.Item icon={<IconCategory size={18} />} disabled>
          <Link href="/admin/categories">Administrar Categorías</Link>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item
          color="red"
          onClick={logoutHandle}
          icon={<IconLogout size={16} />}
        >
          Cerrar Sesión
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
